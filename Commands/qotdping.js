module.exports = {
    name: "qotdping",
    aliases: ["qping", "qp"],
    description: "Sends QOTD ping",

    execute(message) {
                if (message.channel.id !== "808727257619234827") return message.channel.send('❌ This command can only be run in <#808727257619234827>.');
                if (!message.member.roles.cache.has("809012876110462996")) return message.channel.send('❌ You require the Event Assistant role to run this command.')
                message.delete()
                message.channel.send(`<@&809008084831436840> ⬆️`)

    }
}