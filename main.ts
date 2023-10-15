import {
  ChannelType,
  Client,
  GatewayIntentBits,
  PermissionFlagsBits,
  REST,
  RoleCreateOptions,
  Routes,
} from 'discord.js';
import * as dotenv from 'dotenv';
import {
  ignoreRole,
  languagesRoles,
  categories,
  ignoreCategory,
} from './src/data';
import { getRooms } from './src/methode';

dotenv.config();

const TOKEN = process.env.DISCORD_API_BOT_TOKEN as any;

const CLIENT_ID = process.env.DISCORD_APPLICATION_ID as any;

const main = async () => {
  const commands = [
    {
      name: 'role',
      description: 'Replies with a list of roles in the server',
    },
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
    {
      name: 'delete-roles',
      description: 'Deletes all roles except for the ignored role',
    },
    {
      name: 'create-roles',
      description: 'Creates new roles in the server',
    },
    {
      name: 'delete-categories',
      description: 'Deletes all roles except for the  ignored role',
    },
    {
      name: 'create-categories',
      description: 'Creates new categories in the server',
    },
    { name: 'create-rooms', description: 'Creates new rooms in the server' },
  ];

  const rest = new REST({ version: '10' }).setToken(TOKEN);

  try {
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

    if (interaction.commandName === 'role') {
      const guild = interaction.guild;

      const roles = guild?.roles;

      const cache = roles?.cache;

      const rolesList = cache?.map((role) => {
        const { permissions, name, id } = role;
        return { name, id, permission: permissions.bitfield };
      });
      console.log('roleJson', rolesList);
      await interaction.reply(`we have ${rolesList?.length}`);
    }

    if (interaction.commandName === 'delete-roles') {
      const guild = interaction.guild;
      // Delete a role
      guild?.roles.cache
        .filter((role) => !ignoreRole.includes(role.name))
        .map((role) => {
          guild?.roles
            .delete(role.id, 'The role needed to go')
            .then(console.log)
            .catch(console.error);
        });

      const rolesList = guild?.roles.cache
        .filter((role) => !ignoreRole.includes(role.name))

        ?.map((role) => {
          const { permissions, name, id } = role;
          return { name, id, permission: permissions.bitfield };
        });
      console.log('roleJson', rolesList);

      await interaction.reply(`we delete ${rolesList?.length} roles`);
    }

    if (interaction.commandName === 'create-roles') {
      const guild = interaction.guild;
      // Delete a role
      const guildRoles: RoleCreateOptions[] = [];

      const rolesList = guild?.roles.cache
        .filter((role) => !ignoreRole.includes(role.name))

        ?.map((role) => role.name);

      for (let index = 0; index < languagesRoles.length; index++) {
        const role = languagesRoles[index];

        guildRoles.push({
          name: role.name,
          color: role.color,
          // unicodeEmoji: role.unicodeEmoji,
          hoist: role.hoist,
          mentionable: role.mentionable,
          permissions: [],
        });

        if (role.haveTeacher === true) {
          guildRoles.push({
            name: `Teacher - ${role.name}`,
            color: role.color,
            // unicodeEmoji: role.unicodeEmoji,
            hoist: role.hoist,
            mentionable: role.mentionable,
          });
        }
      }

      const roleData = guildRoles.filter((gr) => !rolesList.includes(gr.name));
      roleData.map(async (role) => {
        // Create a new role with data and a reason
        await guild?.roles.create(role).then(console.log).catch(console.error);
      });

      await interaction.reply(
        `we create ${roleData?.length}/${languagesRoles.length}`,
      );
    }

    if (interaction.commandName === 'delete-categories') {
      const guild = interaction.guild;
      // Delete a categories
      const categories = guild?.channels.cache
        .filter(
          (channel) => !ignoreCategory.includes(channel.name),
          //  && channel.type == ChannelType.GuildCategory,
          //  ||   channel.type == ChannelType.GuildCategory,
        )
        ?.map((channel) => {
          channel
            .delete('making room for new channels')
            .then(console.log)
            .catch(console.error);
          const { type, name, id } = channel;
          return { name, id, type };
        });
      await interaction.reply(`we delete ${categories?.length} categories`);
    }

    if (interaction.commandName === 'create-categories') {
      let count = 0;
      const guild = interaction.guild;
      // create a categories
      const rolesInServer = guild?.roles.cache;

      const categoriesInServer = guild?.channels.cache
        ?.filter((channel) => channel.type === ChannelType.GuildCategory)
        .map((channel) => channel.name);
      const channels = categories
        .filter((category) => !categoriesInServer?.includes(category.name))
        .map((category) => {
          const permissionOverwrites = [
            ...category.denyViewChanel.map((role) => {
              return {
                id: rolesInServer?.find((roleServer) => roleServer.name == role)
                  ?.id,
                deny: [PermissionFlagsBits.ViewChannel],
              };
            }),
            ...category.allowViewChanel.map((role) => {
              return {
                id: rolesInServer?.find((roleServer) => roleServer.name == role)
                  ?.id,
                allow: [PermissionFlagsBits.ViewChannel],
              };
            }),
          ];

          count++;
          guild?.channels.create({
            name: category.name,
            type: ChannelType.GuildCategory,
            permissionOverwrites: permissionOverwrites as any,
          });
          //  .then(console.log)
          //  .catch(console.error);

          return category;
        });

      //console.log(JSON.stringify(categoriesInServer));
      await interaction.reply(`we create ${count} categories`);
    }

    if (interaction.commandName === 'create-rooms') {
      let count = 0;
      const guild = interaction.guild;
      // create a categories

      guild?.channels.cache
        ?.filter(
          (channel) =>
            channel.type === ChannelType.GuildCategory &&
            categories.map((category) => category.name).includes(channel.name),
        )
        .map((channel) => {
          console.log(
            getRooms({
              parent_id: channel.id,
              name: channel.name,
              haveTeacher:
                languagesRoles.find((lr) => lr.name == channel.name)
                  ?.haveTeacher ?? false,
            }),
          );
          getRooms({
            parent_id: channel.id,
            name: channel.name,
            haveTeacher:
              languagesRoles.find((lr) => lr.name == channel.name)
                ?.haveTeacher ?? false,
          }).forEach((room) => {
            count++;
            try {
              guild.channels.create(room as any);
            } catch (error) {
              console.error('error: ', error);
            }
          });
        });

      await interaction.reply(`we create ${count} rooms`);
    }
  });

  client.login(TOKEN);
};

main().then(() => console.log('App run successfully'));
