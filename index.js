const Discord = require("discord.js");
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.commands = new Discord.Collection();
let prefix = "!";
const fs = require('fs');




client.on('ready',() => console.log('Hello sir, I\' ready to work !!')); //Bot message in the console
client.on('ready', function(){
    client.user.setActivity('Visual Studio Code') //Activity of the Bot
})

client.on('guildMemberAdd', user =>{ //Player joins
    let embed = new Discord.RichEmbed()
    .setAuthor(user.user.username, user.user.displayAvatarURL)
    .setDescription(":tada: Welcome " + user.user.username + " to our server **" +user.guild.name + "**")
    .setFooter("We are now " + user.guild.memberCount + "member !")
    .setColor("0df605")
    user.guild.channels.get("YOUR DISCORD CHANNEL ID HERE").send(embed)

})

client.on('guildMemberRemove', user =>{ //Player leaves
    let embed = new Discord.RichEmbed()
    .setAuthor(user.user.username,  user.user.displayAvatarURL) 
    .setDescription(":cry: " + user.user.username + " just left **" +user.guild.name + "**... We already forgot him !!")
    .setFooter("We are now " + user.guild.memberCount + "member !")
    .setColor("e70d0d")
    user.guild.channels.get("YOUR DISCORD CHANNEL ID HERE").send(embed)

})

fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('No command !'); }
        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} command ready !`);
            client.commands.set(commande.help.name, commande);
        });
});
 
fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} event ready !`);
        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});
client.login('TOKEN-HERE');

