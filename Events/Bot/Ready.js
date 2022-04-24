const chalk = require('chalk'); 
const client = require("../../index"); 
const {
    dependencies
} = require('../../package.json');
const ver = dependencies['discord.js']; 
const {mongoURL} = require("../../json/config.json"); 
const {
    connect
} = require('mongoose'); 




client.on("ready", async () => {
    // Presence
    const activities = [
        `Add me | ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} User`,
        `Invite me | ${client.guilds.cache.size} Guilds`,
        `lol`,
      ];

        setInterval(() => {
          const randomIndex = Math.floor(Math.random() * activities.length);
          const newActivity = activities[randomIndex];
      
          client.user.setActivity(newActivity, {type: "WATCHING"});
        }, 10000);

    const fs = require('fs')
    const length = fs.readdirSync('./Events').length

    console.log("")
    console.log(chalk.red.bold("——————————[Basic Info]——————————"))
    console.log(
        chalk.white(`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0) > 1 ? "Users:" : "User:"}`),
        chalk.red(`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}`),
        chalk.white("||"),
        chalk.white(`${client.guilds.cache.size > 1 ? "Servers:" : "Server:"}`),
        chalk.red(`${client.guilds.cache.size}`),
    )
    console.log(
        chalk.white(`Slash Commands:`),
        chalk.red(`${client.SlashCommands.size}`),
        chalk.white("||"),
        chalk.white(`Events:`),
        chalk.red(`${length}`),
    )
    
    console.log("")
    console.log(chalk.red.bold("——————————[Statistics]——————————"))
    console.log(
        chalk.white(`Running on Node`),
        chalk.green(process.version),
        chalk.white('on'),
        chalk.green(`${process.platform} ${process.arch}`)
    )
    console.log(
        chalk.white('Memory:'),
        chalk.green(`${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)}`),
        chalk.white('MB')
    )
    console.log(
        chalk.white('RSS:'),
        chalk.green(`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}`),
        chalk.white('MB')
    )
    console.log(
        chalk.white('Discord.js Verion:'),
        chalk.green(ver)
    )
    console.log("")
    console.log(chalk.red.bold("——————————[Connections]——————————"))
    console.log(chalk.white("✅ Successfully Connected as"), chalk.red(`${client.user.tag}`), chalk.white('('), chalk.green(client.user.id), chalk.white(')'))
    //connect(mongoURL, {}).then(console.log(chalk.white("✅ Successfully Connected To"), chalk.red(`Mongoose Data Base`)))
})