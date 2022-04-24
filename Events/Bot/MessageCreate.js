const client = require("../../index"); 
const config = require("../../json/config.json");

client.on("messageCreate", async (message) => {
    if (message.author.bot || !message.guild) return;

    //Check if Bot was mentioned
    if (message.mentions.has(client.user)) {
        message.channel.send({content: `${config.errEmoji} Our Bot only uses Slashcommands, please use \`/help\` !`});
    }
});