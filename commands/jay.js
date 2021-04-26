const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = async (client, message, args, config) => {
let prf = db.fetch(`user_${message.author.id}`)
    if (prf == null) return message.channel.send(`You're not allowed`)
    let embed = new Discord.RichEmbed()
    .setTitle(`jay is a faggot`)
    .setDescription(`


Jay - I want to have sex with men
Bali- No thats gay
Jay - *does it anyways* `)
    message.channel.send(embed)
}