const Discord = require("discord.js");

module.exports.run = (client, message, args) =>{
    
    message.channel.send({
        embed:{
            color: 0x0c1cff,
            author:{ 
               
                name: `Server Rules ! `
            },
            fields: [{
                name: ":one:",
                value:"Any message inciting hatred or containing a racist, homophobic, religious or other insult is prohibited !"
            },{
                name: ":two:",
                value: "Any threat, whether physical or technical, is not tolerated on the server."
            },{
                name: ":three:",
                value: "The distribution of personal information of a member is prohibited and liable to a very heavy penalty."
            },{
                name: ":four:",
                value: "Spam is not tolerated. Avoid sending the same message repeatedly or using too many emojis or capital letters in the same message."
            },{
                name: ":five:",
                value: "Ads on other discord servers are prohibited and sanctioned by removal of the ad with a warn. On the other hand, advertising for other content (Youtube Video for example) is authorized in the #pubs room."
            },{
                name: ":six:",
                value: "Links from X sites, clickbait, phishing are prohibited on the server"
            },{
                name: ":seven:",
                value: "Discord avatars of the sexual, rascist or insulting type are prohibited on our server (Request to change the avatar then ban if the person in question refuses)"
            },{
                name: "Informations :",
                value: "3 warns = 7d ban / 3 7d bans = permanent ban \n These rules can be modified by the server admins! \n We wish you a good stay with us and hope to see you regularly!" 
            }],
            thumbnail: { url: client.user.avatarURL },
            footer:
                "You can accept the payment by clicking on :white_check_mark: to access the discord server!"
            
            
        }

    })

}
module.exports.help ={
    name : "regles"
}
