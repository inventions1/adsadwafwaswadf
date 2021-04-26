const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = async (client, message, args, config) => {
let prf = db.fetch(`user_${message.author.id}`)
    if (prf == null) return message.channel.send(`You aren't allowed.`)
    let embed = new Discord.RichEmbed()
    .setTitle(`LUCID DDOS BOT`)
    .setDescription(`
${config.prefix}attack <ip> <port> <time> <method> : **send an attack**

${config.prefix}methods : **methods**

${config.prefix}help : **help** 

${config.prefix}geo : **shows geographic information of an ip address.**

${config.prefix}prices : **shows prices for lucid bot & home holder.**

${config.prefix}tos : **shows the terms of service that you must follow.**

${config.prefix}pscan : **work in progress**

**~~lucid bot :tm: ~~** `)
    message.channel.send(embed)
}