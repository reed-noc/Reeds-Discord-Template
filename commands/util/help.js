
const { getGuildById } = require("../../utils/functions");
const { ownerId } = require("../../../config.json");
const BaseEmbed = require("../../modules/BaseEmbed");
const categories = require("../../data/categories.json");

module.exports = {
  name: "help",
  description: "Shows all commands Or shows more info about a command",
  category: "util",
  cooldown: 2,
  usage: "h <category name | command name>",
  aliases: ["h"],
  async execute(bot, message, args) {
    const lang = await bot.getGuildLang(message.guild.id);
    const guild = await getGuildById(message.guild.id);
    const prefix = guild.prefix;
    const cmdArgs = args[0];

    if (categories.includes(cmdArgs)) {
      const cmds = bot.commands
        .filter((com) => com.category === cmdArgs)
        .map((cmd) => cmd.name)
        .join(", ");

      if (cmds.length < 0) {
        return message.channel.send(lang.HELP.CAT_NOT_EXIST);
      }

      const embed = BaseEmbed(message)
        .setTitle(`${lang.HELP.COMMANDS}: ${cmdArgs}`)
        .setDescription(`\`\`\`${cmds}\`\`\``);

      return message.channel.send({ embed });
    } else if (cmdArgs) {
      const cmd =
        bot.commands.get(cmdArgs) || bot.commands.get(bot.aliases.get(cmdArgs));
      if (!cmd) return message.channel.send(lang.HELP.CMD_NOT_FOUND);

      const aliases = cmd.aliases
        ? cmd.aliases.map((alias) => alias)
        : lang.GLOBAL.NONE;
      const options = cmd.options
        ? cmd.options.map((option) => option)
        : lang.GLOBAL.NONE;
      const cooldown = cmd.cooldown ? `${cmd.cooldown}s` : lang.GLOBAL.NONE;

      const embed = BaseEmbed(message)
        .setTitle(`${lang.HELP.COMMAND}: ${cmd.name}`)
        .addField(lang.HELP.ALIASES, aliases, true)
        .addField(lang.HELP.COOLDOWN, `${cooldown}`, true)
        .addField(
          "Usage",
          cmd.usage ? `${prefix}${cmd.usage}` : lang.GLOBAL.NOT_SPECIFIED,
          true
        )
        .addField(lang.UTIL.CATEGORY, cmd.category, true)
        .addField(
          lang.UTIL.DESCRIPTION,
          cmd.description ? cmd.description : lang.GLOBAL.NOT_SPECIFIED
        )
        .addField(lang.HELP.OPTIONS, options);

      return message.channel.send(embed);
    }

    let nsfw = message.channel.nsfw;
    const commands = bot.commands;

    const utilsCmds = commands
      .filter(({ category }) => category === "utils")
      .map(({ name }) => name)
      .join(", ");
    const levelCmds = commands
      .filter(({ category }) => category === "levels")
      .map(({ name }) => name)
      .join(", ");
    
    const embed = BaseEmbed(message)

    embed
        .addField(lang.HELP.UTIL, `\`\`\`${utilsCmds}\`\`\``)
      .addField(lang.HELP.LEVEL, `\`\`\`${levelCmds}\`\`\``)
      .addField(`${lang.HELP.GUILD_PREFIX}: `, prefix)
      .setDescription(lang.HELP.CMD_DESC.replace("{prefix}", prefix))
      .setTitle("Help");

    message.channel.send(embed);
  },
};
