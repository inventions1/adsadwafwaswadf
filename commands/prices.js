const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = async (client, message, args, config) => {
    let embed = new Discord.RichEmbed()
    .setTitle(`Lucid Prices`)
    .setDescription(`

**HOME HOLDER PRICES

- MONTHLY: $15
- LIFETIME: $25
- EXTRA CONCURRENTS: $5
- EXTRA 5K SECONDS: $5

REGULAR DDOS BOT PRICES

-MONTHLY: $15
-LIFETIME: $25
-EXTRA CONCURRENTS: $5
-EXTRA 300 SECONDS: $7


**~~lucid bot :tm: ~~** `)
    message.channel.send(embed)
}