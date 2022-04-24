const {
    Client,
    CommandInteraction,
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'invite',
    description: 'Invite link for ahmads Slave',
 
    /** 
     * @param {Client} client 
     * @param {CommandInteraction} interaction
     */
    run: async (client, interaction) => {
        interaction.reply({ephemeral: true, content: 'You can invite Our bot via the link below: \n https://discord.com/api/oauth2/authorize?client_id=967880195451265144&permissions=8&scope=bot%20applications.commands'});
    }
}