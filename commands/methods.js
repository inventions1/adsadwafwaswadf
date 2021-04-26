const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = async (client, message, args, config) => {
let prf = db.fetch(`user_${message.author.id}`)
    if (prf == null) return message.channel.send(`You aren't allowed.`)
    let embed = new Discord.RichEmbed()
    .setTitle(`LUCID DDOS BOT`)
    .setDescription(`

**REGULAR METHODS:**

#0: STD: STD Method (TCP) (Max Time: 1000s)
#1: UNPATCHED-STD: Edited STD Method (TCP) (Max Time: 1000s)
#2: VSE: VSE Method (Max Time: 1000s)
#3: TCP: TCP Method (Max Time: 1000s)
#4: UDP: UDP Method (Max Time: 1000s)

**BYPASSES:**

#5: NFO: NFO Method (Max Time: 120s) :shield:
#6: OVH-KILL: OVH Method (Max Time: 120s) :shield:
#6: OVH-GAME: OVH Method (Max Time: 120s) :shield:
#7: FUZE: FUZE Method (Max Time: 120s) :shield:
#8: HTTP-HEX: HTTP-HEX Method (Max Time: 120s) :shield:
#9: VPN-KILL: VPN-KILL Method (Max Time: 120s) :shield:
#10: XBOX-KILL: XBOX-KILL Method (Max Time: 120s) :shield:
#11: KA: KILL-ALL Method (Max Time: 120s) :shield:
#12: MORGUE: MORGUE Method (Max Time: 120s) :shield:

**GAME METHODS:**

#13: R6: R6 Method (Max Time: 120s) :video_game:
#14: FN: FN Method (Max Time: 120s) :video_game:
#15: GAME: GAME METHOD (Max Time: 120s) :video_game:

~~**lucid ddos bot**~~ `)
    message.channel.send(embed)
}