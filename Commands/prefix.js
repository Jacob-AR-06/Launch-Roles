module.exports = {
    name: "prefix",
    aliases: ["prefix", "p"],
    description: "Sets the prefix of the server",

    execute(message, args) {
        let sh4dowscape = ('Sh4dowScape#0001')
        if (message.author.id !== "653639837496246274") return message.channel.send(`❗ Only ${sh4dowscape} has permission to use this command.`);
        if (!args[1]) return message.channel.send('📓 Please provide a valid prefix.');
        const db = require('quick.db');

        db.set(`prefix_${message.guild.id}`, args[1]);
        message.channel.send(`☑️ The prefix has been changed to \`${args[1]}\`.`);
    }
}