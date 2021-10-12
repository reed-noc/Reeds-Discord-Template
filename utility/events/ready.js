const { getUserById, getGuildById, updateUserById  } = require("../utils/functions");
const { guildid, status, statustype  } = require("../../config.json");
const { Guild } = require("discord.js");

module.exports = {
  name: "ready",
  execute(bot) {
    const serverCount = bot.guilds.cache.size;
    const channelCount = bot.channels.cache.size;
    
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      bot.user.setActivity(status, { type: "WATCHING" });
    }, 60000);
  }
};
