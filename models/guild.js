const mongoose = require('mongoose');

const guildModel = mongoose.Schema({
    guildID: {
        type: String,
        required: true,
    },
    logChannels: {
        serverLogs: {
            type: String,
        },
        modLogs: {
            type: String,
        },
        memberLogs: {
            type: String,
        }
    },
    mutedRole: {
        type: String,
    },
})

module.exports = mongoose.model('guilds', guildModel);