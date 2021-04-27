const Discord = require("discord.js");

module.exports.run = (client, message, args) =>{
    
    message.channel.send({
        embed:{
            color: 0x0c1cff,
            author:{ 
               
                name: `Règlements du serveur ! `
            },
            fields: [{
                name: ":one:",
                value:"Tout message incitant à la haine ou contenant une insulte raciste, homophobe, religieuse ou autre est interdit (Suppression du message + Warn ou ban selon le message envoyé)"
            },{
                name: ":two:",
                value: "Toute menace que ce soit physique ou technique n'est tolérée sur le serveur (7 jours de ban).",
            },{
                name: ":three:",
                value: "La diffusion d'informations personnelles d'un membre est interdite et passible d'une très lourde sanction (Ban définitif)."
            },{
                name: ":four:",
                value: "Le spam n'est pas toléré. Évite d'envoyer le même message à répétitions ou d'utiliser trop d'émojis ou de majuscules dans le même message (Warn)."
            },{
                name: ":five:",
                value: "Les pubs sur d'autres serveurs discord est interdite et sanctionnée d'une suppression de la pub avec un warn. Par contre la pub pour autre contenu (Video Youtube par exemple) est autorisée dans le salon #pubs"
            },{
                name: ":six:",
                value: "Les liens de sites X, putes à clic, hameçonnage sont interdits sur le serveur (Suppression du lien + Ban 7 jours )."
            },{
                name: ":seven:",
                value: "Les avatars discord de type sexuelles, rasciste ou insultante sont interdit sur notre serveur (Demande de changement de l'avatar puis ban si la personne en question refuse) "
            },{
                name: "Informations :",
                value: "3 warns = ban 7j / 3 bans 7j = ban permanant \n Ces règles peuvent être modifiés par les admins du serveur ! \n Nous te souhaitons un bon séjour parmis nous et espère te voir régulièrement !" 
            }],
            thumbnail: { url: client.user.avatarURL },
            footer:
                "Vous pouvez accepter le règlement en appyant sur :white_check_mark: pour acceder au serveur discord !"
            
            
        }

    })

}
module.exports.help ={
    name : "regles"
}
