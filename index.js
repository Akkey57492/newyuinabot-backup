const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`${client.user.tag} でログインしています。`)
  client.user.setActivity(`${client.guilds.cache.size} server's`,{'type':'PLAYING'})
});

client.on('message', async msg => {
  if (msg.content === '!ping') {
    try{
      msg.channel.send(client.ws.ping + "ms").then(message => console.log(`[run]${msg.author.tag} used ${msg.content}`)).catch(console.error);
    } catch(e) {
      msg.channel.send(e.message).then(message => console.log(`[run]${msg.author.tag} used ${msg.content}`)).catch(console.error);
    }
  } else if (msg.content === '!uid' || msg.content === '!user_id') {
    try{
      msg.channel.send(msg.author.id).then(message => console.log(`[run]${msg.author.tag} used ${msg.content}`)).catch(console.error)
    } catch(e) {
      msg.channel.send(e.message);
    }
  } else if (msg.content === '!cid' || msg.content === '!channel_id') {
    try{
      msg.channel.send(msg.channel.id).then(message => console.log(`[run]${msg.author.tag} used ${msg.content}`)).catch(console.error)
    } catch(e) {
      msg.channel.send(e.message);
    }
  } else if (msg.content === '!gid' || msg.content === '!guild_id' || msg.content === '!server_id' || msg.content === '!sid') {
    try{
      msg.channel.send(msg.guild.id).then(message => console.log(`[run]${msg.author.tag} used ${msg.content}`)).catch(console.error)
    } catch(e) {
      msg.channel.send(e.message);
    }
  }
});

client.login(process.env.TOKEN);