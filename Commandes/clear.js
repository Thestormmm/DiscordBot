const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) { return message.channel.send('You don\' have the permission !'); }
    if (!args[0]) { return message.channel.send('You have to write the number of messages to clear !'); }
    else if (isNaN(args[0])) { return message.channel.send('You have to write a **number** !'); }
                                                                              
        message.channel.bulkDelete(args[0])
            .then((messages) => {
                message.channel.send(`**${messages.size}** messages have been deleted !`);
            });
};

module.exports.help = {
    name: 'clear'
};