import { Client, GatewayIntentBits, REST, Routes } from "discord.js";
import * as dotenv from "dotenv";
import { languagesRoles } from "./data";
import { arrayToMessageContent } from "./methode";

dotenv.config();

const TOKEN = process.env.DISCORD_API_BOT_TOKEN as any;

const CLIENT_ID = process.env.DISCORD_APPLICATION_ID as any;

const ignoreRole = ["admin-server"];

const main = async () => {
  const commands = [
    {
      name: "role",
      description: "Replies with a list of roles in the server",
    },
    {
      name: "ping",
      description: "Replies with Pong!",
    },
    {
      name: "delete-roles",
      description: "Deletes all roles except for the admin-server role",
    },
    {
      name: "create-roles",
      description: "Creates new roles in the server",
    },
  ];

  const rest = new REST({ version: "10" }).setToken(TOKEN);

  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }

  const client = new Client({ intents: [GatewayIntentBits.Guilds] });

  client.on("ready", () => {
    console.log(`Logged in as ${client?.user?.tag}!`);
  });

  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "ping") {
      await interaction.reply("Pong!");
    }

    if (interaction.commandName === "role") {
      const guild = interaction.guild;

      const roles = guild?.roles;

      const cache = roles?.cache;

      const rolesList = cache?.map((role) => {
        const { permissions, name, id } = role;
        return { name, id, permission: permissions.bitfield };
      });
      console.log("roleJson", rolesList);

      await interaction.reply(arrayToMessageContent(rolesList as any));
    }

    if (interaction.commandName === "delete-roles") {
      const guild = interaction.guild;
      // Delete a role
      guild?.roles.cache
        .filter((role) => !ignoreRole.includes(role.name))
        .map((role) => {
          guild?.roles
            .delete(role.id, "The role needed to go")
            .then(() => console.log("Deleted the role"))
            .catch(console.error);
        });

      const rolesList = guild?.roles.cache
        .filter((role) => !ignoreRole.includes(role.name))

        ?.map((role) => {
          const { permissions, name, id } = role;
          return { name, id, permission: permissions.bitfield };
        });
      console.log("roleJson", rolesList);

      await interaction.reply(arrayToMessageContent(rolesList as any));
    }

    if (interaction.commandName === "create-roles") {
      const guild = interaction.guild;
      // Delete a role
      languagesRoles.map((role) => {
        // Create a new role with data and a reason
        guild?.roles
          .create({
            name: role.name,
            color: role.color,
            // unicodeEmoji: role.unicodeEmoji,
            hoist: role.hoist,
            mentionable: role.mentionable,
          })
          .then(console.log)
          .catch(console.error);
      });

      await interaction.reply("cregl ");
    }
  });

  client.login(TOKEN);
};

main().then(() => console.log("App run successfully"));
