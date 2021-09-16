const Discord = require('discord.js');

if (message.content.startsWith(`${prefix}kick`)) {

    let member = message.mentions.members.first();
    member.kick().then((member) => {
        message.channel.send(`:wave: ${member.displayName} has been kicked`);
    }).catch(() => {
        if (!message.member.hasPermission(['KICK_MEMBERS', 'ADMINISTRATOR'])) {
            message.reply("You cannot kick members");
        } else if (member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR'])) {
            message.reply("You cannont kick this member");
        }
    })
}
if (message.content.startsWith(`${prefix}ban`)) {

    let member = message.mentions.members.first();
    member.ban().then((member) => {
        message.channel.send(`:wave: ${member.displayName} has been kicked`);
    }).catch(() => {
        if (!message.member.hasPermission(['BAN_MEMBERS', 'ADMINISTRATOR'])) {
            message.reply("You cannot ban members");
        } else if (member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR'])) {
            message.reply("You cannont ban this member");
        }
    })
}
