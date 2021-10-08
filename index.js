const { channel } = require('diagnostics_channel');
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });
const token = '';
client.login(token);

client.on('ready', async () => {
    client.user.setActivity('Bot is ready to go');
    console.log(`${client.user.username} is online!`);
});

client.on('message', async message => {
    const prefix = "!";

    if(message.author.bot) return;
    if(!message.guild) return;
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd === "ping") {
        const msg = await message.channel.send(`🏓 Pinging...`);

        msg.edit(`🏓 Pong!\nlatency is ${Math.floor(msg.createdAt - message.createdAt)}ms\nAPI Latency ${Math.round(client.ws.ping)}ms`);
    }
});
