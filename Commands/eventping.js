module.exports = {
    name: "eventping",
    aliases: ["eping", "ep"],
    description: "Sends Events ping",

    execute(message) {
                if (message.channel.id !== "809015560922464316") return message.channel.send('❌ This command can only be run in <#809015560922464316>.');
                if (!message.member.roles.cache.has("")) return message.channel.send('❌ You require the Event Assistant role to run this command.')
                message.delete()
                message.channel.send(`<@&809008164266573834> ⬆️`)

    }
}