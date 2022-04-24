const {
    Client,
    CommandInteraction,
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Help Command',

    /** 
     * @param {Client} client 
     * @param {CommandInteraction} interaction
     */
    run: async (client, interaction) => {
        interaction.reply({ephemeral: false, content: 'Still in Progress'});
    }
}