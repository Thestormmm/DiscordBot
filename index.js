const Discord = require("discord.js");
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.commands = new Discord.Collection();
let prefix = "!";
const fs = require('fs');




client.on('ready',() => console.log('BONSOIR! je suis démarré bb <3')); //Bot démarré
client.on('ready', function(){
    client.user.setActivity('Visual Studio Code') //Joue a ...
})

client.on('guildMemberAdd', user =>{ //Join d'un joueur
    let embed = new Discord.RichEmbed()
    .setAuthor(user.user.username, user.user.displayAvatarURL)
    .setDescription(":tada: Bienvenue à " + user.user.username + " sur le serveur **" +user.guild.name + "**")
    .setFooter("Nous sommes désormais " + user.guild.memberCount)
    .setColor("0df605")
    user.guild.channels.get("YOUR DISCORD CHANNEL ID HERE").send(embed)

})

client.on('guildMemberRemove', user =>{ //Leave d'un joueur
    let embed = new Discord.RichEmbed()
    .setAuthor(user.user.username,  user.user.displayAvatarURL) 
    .setDescription(":cry: " + user.user.username + " a quitté le serveur **" +user.guild.name + "**...C'était qui déjà lui ?")
    .setFooter("Nous sommes désormais " + user.guild.memberCount)
    .setColor("e70d0d")
    user.guild.channels.get("YOUR DISCORD CHANNEL ID HERE").send(embed)

})

fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }
        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} commande chargée !`);
            client.commands.set(commande.help.name, commande);
        });
});
 
fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);
        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});
client.login('TOKEN-HERE');

