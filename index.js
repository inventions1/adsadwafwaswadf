const Discord = require('discord.js')
const client = new Discord.Client()
const express = require('express')
const app = express()
const db = require('quick.db')
const config = require('./config.json')


client.on('ready', () => {
    console.log(`Lucid Bot is ready to slam some people!`)
})

client.on('message', message => {
    if (message.author.bot) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase();
    if (message.content.indexOf(config.prefix) !== 0) return;
    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args, config)
    } catch (err) {
        return;
    }
})

/* ExpressJS Routing */
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/assets/html/index.html')
})

app.get('/add_id', (req, res) => {
    db.set(`user_${req.query.id}`, {null: null})
    res.send(`ok`)
})

app.get('/del_id', (req, res) => {
    db.delete(`user_${req.query.id}`)
    res.send(`ok`)
})

app.listen(8495)


client.login(config.token)