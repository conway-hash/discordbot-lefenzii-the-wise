import dotenv from 'dotenv';
dotenv.config();

import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
  intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.MessageContent
  ],
});

client.login(process.env.DISCORD_TOKEN);

client.on("messageCreate", async (message) => {
  if (!message?.author.bot) {
    if (message.content.toLowerCase().includes("lefenzii")) {
      message.channel.send(`Echo ${message.content}`);
    }
  }
});