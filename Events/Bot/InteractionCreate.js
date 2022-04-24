const client = require('../../index'); 
const {
    owners
} = require('../../json/owners.json'); // Getting the owner ids
const config = require("../../json/config.json");
client.on("interactionCreate", async (interaction) => {

    // Slash Commands
    if (interaction.isCommand()) {
        const command = client.SlashCommands.get(interaction.commandName);
        // If Command Doesnt exist
        if (!command) return interaction.reply({
            content: "An Error has occurred!",
            ephemeral: true
        }) && client.SlashCommands.delete(interaction.commandName)

        // User Permissions Check
        if (!interaction.member.permissions.has(command.userPermissions || [])) return interaction.reply({
            content: `${config.errEmoji} You need \`${command.userPermissions || []}\` permissions to run this command`,
            ephemeral: true,
        });

        // Under Maintenance Commands
        if (command.maintenance) {
            if (!owners.includes(interaction.user.id)) {
                return interaction.reply({
                    content: `${config.errEmoji} This command is on maintenance please try later, Thank you!`
                })
            }
        }

        // Bot Permissions Check
        if (!interaction.guild.me.permissions.has(command.botPermissions || []))
            return interaction.reply({
                content: `${config.errEmoji} I need \`${cmd.botPermissions || []}\` permissions to run this command`,
                ephemeral: true
            });

        // Owner Only Commands
        if (command.ownerOnly) {
            if (!owners.includes(interaction.user.id)) {
                return interaction.reply({
                    content: `${config.errEmoji} Only the Bot Developers are allowed to run this command!`
                })
            }
        };

        command.run(client, interaction); // Running the command
    }

    // Context Menu
    if (interaction.isContextMenu()) {
        const command = client.SlashCommands.get(interaction.commandName);
        if (command) command.run(client, interaction);
    }

})