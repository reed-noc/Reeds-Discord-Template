const { getUserById, getGuildById, updateUserById  } = require("../utils/functions");
const { guildid } = require("../../config.json");
const { Guild } = require("discord.js");
module.exports = {
  name: "ready",
  execute(bot) {
    const serverCount = bot.guilds.cache.size;
    const channelCount = bot.channels.cache.size;

    console.log(
      `[BOT]: Bot is running with ${channelCount} channels and ${serverCount} servers`
    );
    setInterval(() => {
      bot.user.setActivity(/help, { type: "WATCHING" });
    }, 60000);
  }
};
