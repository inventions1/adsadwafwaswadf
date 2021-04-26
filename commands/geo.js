const Discord = require('discord.js')
const https = require('http')
module.exports.run = async (client, message, args, config) => {
    if (!args[0]) return message.react(`:x:`)
    console.log(args[0])
    let req = https.request({
        hostname: 'ip-api.com',
        path: `/json/${args[0]}`,
        port: 80,
        method: "GET"
    }, (res) => {
        res.on('data', data => {
            data = JSON.parse(data.toString())
            let embed = new Discord.RichEmbed()
            .setTitle(`GeoIP Success!`)
            .addField(`IP Information`, `
            IP Address: ${args[0]}
            `)
            .addField(`Location/Geo Information`, `
**IP Location**: ${data.country} (:flag_${data.countryCode.toLowerCase()}:)
**IP Location (Extended)**: ${data.region} (${data.regionName}), ${data.city} (${data.zip})
**ISP/Provider**: ${data.isp}, ${data.org} (${data.as})
            `)
            .setColor(`#FF0000`)
            message.channel.send(embed)
        })
    })
    req.end()
}