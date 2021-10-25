const { Client, Intents, Collection } = require("discord.js"),
{ token, prefix, color, ownerId } = require("./config.json"),
client = new Client( { intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES ] })

client.commands = new Collection();
client.aliases = new Collection();
client.settings = { prefix, ownerId }

for(let handler of  ["command", "event"]) require(`./handlers/${handler}`)(client);

client.login(token)
