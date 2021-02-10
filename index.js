const Discord = require('discord.js');
const bot = new Discord.Client();

const db = require('quick.db');

const token = require('./Data/config.json');

const fs = require('fs');
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./Commands/${file}`);
    bot.commands.set(command.name, command);
};

bot.on('ready', () => {
    console.log('Bot is on!');
    bot.user.setActivity(`with LAUNCH` , { type: 'PLAYING'}).catch(console.error);
});

bot.on('message', message => {


    if (!message.guild) return;

    let prefix;
    let prefixes = db.fetch(`prefix_${message.guild.id}`);

    if (prefixes == null) {
        prefix = ';'
        db.set(`prefix_${message.guild.id}`, ";");
    } else {
        prefix = prefixes;
    }

    let args = message.content.substring(prefix.length).split(" ");

    if (!fs.existsSync(`./Scores/${message.guild.id}.json`)) fs.writeFileSync(`./Scores/${message.guild.id}.json`, JSON.stringify({}), err => {
        if (err) {
            console.log(err);
            message.channel.send(err);
        }
    });

    bot.commands.get('Handler').execute(message);

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    switch (args[0]) {
        case 'qping':
            bot.commands.get('qotdping').execute(message);
            break;
        case 'eping':
            bot.commands.get('eventping').execute(message);
            break;
        case 'prefix':
            bot.commands.get('prefix').execute(message, args);
            break;
    }
})

bot.login(token)