import {
  ChannelType,
  Client,
  GatewayIntentBits,
  PermissionFlagsBits,
  PermissionsBitField,
  REST,
  Routes,
} from 'discord.js';
import * as dotenv from 'dotenv';

import AppDataSource from './src/db';
import { User } from './src/models/user';
import { Server } from './src/models/server';

dotenv.config();

const TOKEN = process.env.DISCORD_API_BOT_TOKEN as any;

const CLIENT_ID = process.env.DISCORD_APPLICATION_ID as any;

const main = async () => {
  const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },

    { name: 'send-message', description: 'Send Messages to users' },
  ];

  const rest = new REST({ version: '10' }).setToken(TOKEN);

  try {
    await AppDataSource.initialize();
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }

  const client = new Client({ intents: [GatewayIntentBits.Guilds] });

  client.on('ready', () => {
    console.log(`Logged in as ${client?.user?.tag}!`);
  });

  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
      await interaction.reply('Pong!');
    }

    if (interaction.commandName === 'send-message') {
      const users = await User.find({
        where: {
          // id_discord: '626081773901709331',
          applied: false,
        },
      });

      const servers = await Server.find();

      users.forEach(async (dbUser) => {
        try {
          const server_name =
            servers.find((server) => dbUser.found_in == server.id_discord)
              ?.name ?? 'another server';
          const user = await client.users.fetch(dbUser.id_discord);

          user.send(`Hi ${
            user.globalName
          }, after having had the opportunity to know you on ${server_name.toLowerCase()}, and recognizing that you are a good member and a good person, we would like to invite you to join our new language server. Here, you can find a wide choice of languages to practice and many people with whom you can socialize and share your passions.
          https://discord.gg/4ujkjz4gae`);

          await User.update(dbUser.id, {
            applied: true,
          });
        } catch {}
      });

      await interaction.reply(
        `:white_check_mark: Messages sent successfully to ${users.length} users`,
      );
    }
  });

  client.login(TOKEN);
};

main().then(() => console.log('App run successfully'));
