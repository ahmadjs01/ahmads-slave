const {
    Collection,
    Client
} = require("discord.js");
const tokenConfig = require("./token.json")

//Create Client
const client = new Client({
    allowedMentions: {
        repliedUser: true,
        parse: ["users", "roles", "everyone"]
    },
    intents: 32767,
});
module.exports = client; // Exporting our Client
// Global Variables
client.SlashCommands = new Collection();

// Requiring The Handler
require('./Handler/handler')(client);

client.login(tokenConfig.token); 
