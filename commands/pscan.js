const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = async (client, message, args, config) => {
let prf = db.fetch(`user_${message.author.id}`)
    if (prf == null) return message.channel.send(`You aren't allowed.`)
    let embed = new Discord.RichEmbed()
    .setTitle(`Lucid Port Scanner`)
    .setDescription(`

**CURRENT WORK IN PROGRESS**

**PLEASE HAVE PATIENCE**

**~~lucid bot :tm: ~~** `)
    message.channel.send(embed)
}