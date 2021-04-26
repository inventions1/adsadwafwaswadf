const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = async (client, message, args, config) => {
    let embed = new Discord.RichEmbed()
    .setTitle(`Lucid TOS`)
    .setDescription(`
**NO SPAMMING ATTACKS UNDER ANY CIRCUMSTANCE, YOU WILL BE BANNED WITHOUT REFUND.**

**DO NOT LEAK TO ANYONE ANYTHING FROM INSIDE THIS SERVER.**

**NO ATTACKING GOVERNMENT WEBSITES WE WILL FINDOUT ANY .GOV WEBSITES THAT YOU SEND ATTACKS ON.**

**DO NOT DDOS ANYTHING FOR ANYONE NO MATTER THE CIRCUMSTANCE.**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**THE BREAKING OF ANY OF THESE RESULTS WILL RESULT IN A TERMINATION OF YOUR PLAN AND A BAN FROM THE SERVER WITHOUT REFUND**

**~~lucid bot :tm: ~~** `)
    message.channel.send(embed)
}