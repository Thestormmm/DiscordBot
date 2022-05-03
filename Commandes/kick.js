const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission('KICK_MEMBERS')) { return message.channel.send('You don\' have the permission !'); }
    if (!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) { return message.channel.send('Discord Bot don\t have the persmission !'); }
    if (message.mentions.users.size === 0) { return message.channel.send('You have to mention the concerned user !'); }

        let kickMember = message.guild.member(message.mentions.users.first());
        if (!kickMember) { return message.channel.send('I didn\' t find the user !'); }
    
        message.mentions.users.first().send(`You have been kicked from **${message.guild.name}** by ${message.author.username}`)
            .then(() => {
                kickMember.kick()
                    .then((member) => {
                        message.channel.send(`${member.user.username} is kicked by ${message.author.username}`);
                    })
                        .catch((err) => {
                            if (err) { return console.error(err); }
                        });
            })
                .catch((error) => {
                    if (error) { console.error(error); }
                        kickMember.kick()
                            .then((member) => {
                                message.channel.send(`**${member.user.username}** is kicked by **${message.author.username}**`);
                            })
                                .catch((err) => {
                                    if (err) { return console.error(err); }
                                });
                });
};

module.exports.help = {
    name: 'kick'
};