const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`${client.user.tag} でログインしています。`)
});

client.on('message', async msg => {
  if (msg.content === '!ping') {
    msg.channel.send('Pong!');
  } else if (msg.content == '!uid' || msg.content === '!user_id') {
    msg.channel.send(msg.author.id);
  } else if (msg.content == '!cid' || msg.content === '!channel_id') {
    msg.channel.send(msg.channel.id);
  } else if (msg.content == '!gid' || msg.content === '!guild_id' || msg.content === '!server_id' || msg.content === '!sid') {
    msg.channel.send(msg.guild.id);
  }
});

client.login(process.env.TOKEN);