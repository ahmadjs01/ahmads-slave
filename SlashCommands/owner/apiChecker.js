const {
    Client,
    CommandInteraction,
    MessageEmbed
} = require('discord.js');
const dcCheck = require('../../Events/APIs/dcChecker');
module.exports = {
    name: 'apicheck',
    description: 'Check discord API status',

    /** 
     * @param {Client} client 
     * @param {CommandInteraction} interaction
     */
    run: async (client, interaction) => {
        dcCheck()
    }
}