import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

import { REST, Routes, Client, GatewayIntentBits } from "discord.js";
dotenv.config();

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "CreateRole",
    description: "CreateRole role",
  },
];
const token = process.env.DISCORD_BOT_TOKEN as any;

const rest = new REST({ version: "10" }).setToken(token);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(
      Routes.applicationCommands(process.env.DISCORD_CLIENT_ID as any),
      { body: commands }
    );

    // ===========

    const client = new Client({ intents: [GatewayIntentBits.Guilds] });

    client.on("ready", () => {
      console.log(`Logged in as ${client.user.tag}!`);
    });

    client.on("interactionCreate", async (interaction) => {
      if (!interaction.isChatInputCommand()) return;

      if (interaction.commandName === "ping") {
        await interaction.reply("Pong!");
      }

      if (interaction.commandName === "CreateRole") {
        //--

        await interaction.reply("C regl");
      }
    });

    client.login(token);

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
