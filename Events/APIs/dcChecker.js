module.exports = dcCheck => {
    const axios = require('axios');
    const client = require('../../index')
    const { MessageEmbed } = require('discord.js');

    //Embeds
    const majorEmbed = new MessageEmbed()
    .setTitle(`API Status`)
    .setDescription(`The API is currently experiencing major outage.`)
    .setColor('#ff0000')

    const partialEmbed = new MessageEmbed()
    .setTitle(`API Status`)
    .setDescription(`The API is currently experiencing partial outage.`)
    .setColor('#ff0000')

    //Set Interval for 5 minutes
    setInterval(() => {
        axios.get(`https://discordstatus.com/api/v2/summary.json`)
        .then(res => {
            res.data.components.forEach(comp => {
                if(comp.name == "API") {
                    if(comp.status == "partial_outage"){
                        client.users.cache.get('476496041529704459').send({embeds: [partialEmbed]});
                    }
                    else if(comp.status == "major_outage") {
                        client.users.cache.get('476496041529704459').send({embeds: [majorEmbed]});
                    }
                    else {
                        client.users.cache.get('476496041529704459').send({content: "Test"});
                    }
    
                }
            })
        })
    }, 300000);
}