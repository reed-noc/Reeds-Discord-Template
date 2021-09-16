const Discord = require('discord.js');

if (message.content.startsWith(${prefix}BAN)) => {
    if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) { return message.channel.send('You do not have the permission for ban users"  !'); }

if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) { return message.channel.send('I don\'t have the permission for ban users" !'); }

if (message.mentions.users.size === 0) { return message.channel.send('You need to ping a user !'); }
let banMember = message.guild.member(message.mentions.users.first());
if (!banMember) { return message.channel.send('User not found!'); }

        banMember.ban().then((member) => {
            message.channel.send(member.displayName + " has left the server")
            message.channel.send(member.displayName + " has been successfully banned by " + message.author);
        })
    }
