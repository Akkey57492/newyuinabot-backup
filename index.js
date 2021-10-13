const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  //スタートした時に送信するテキスト
  console.log(`${client.user.tag} でログインしています。`)
  ////コンソールにYuinaBOT（仮）#1479 でログインしていますを記録する
  client.user.setActivity(`${client.guilds.cache.size} server's`,{'type':'PLAYING'})
});

client.on('message', async msg => {
  if (msg.author.bot) {
    return 0;
  } else if (msg.content === '!ping') {
    try{
      msg.channel.send(client.ws.ping + "ms").then(message => console.log(`[run]${msg.author.tag} used ${msg.content}`)).catch(console.error);
    } catch(e) {
      msg.channel.send(e.message).then(message => console.log(`[run]${msg.author.tag} used ${msg.content}`)).catch(console.error);
    }
  } else if (msg.content === '!userid' || msg.content === '!user_id') {
    try{
      msg.channel.send(msg.author.id).then(message => console.log(`[run]${msg.author.tag} used ${msg.content}`)).catch(console.error)
    } catch(e) {
      msg.channel.send(e.message);
    }
  } else if (msg.content === '!channelid' || msg.content === '!channel_id') {
    try{
      msg.channel.send(msg.channel.id).then(message => console.log(`[run]${msg.author.tag} used ${msg.content}`)).catch(console.error)
    } catch(e) {
      msg.channel.send(e.message);
    }
  } else if (msg.content === '!serverid' || msg.content === '!guild_id' || msg.content === '!server_id' || msg.content === '!sid') {
    try{
      msg.channel.send(msg.guild.id).then(message => console.log(`[run]${msg.author.tag} used ${msg.content}`)).catch(console.error)
    } catch(e) {
      msg.channel.send(e.message);
    }
  } else if (msg.content === '!botid') {
    try{
      msg.channel.send('897034926187229205').then(message => console.log(`[run]${msg.author.tag} used ${msg.content}`)).catch(console.error);
    } catch(e) {
      msg.channel.send(e.message);
    }
  } else if (msg.content === '!invite') {
    try{
      msg.channel.send('https://discord.com/api/oauth2/authorize?client_id=897034926187229205&permissions=8&scope=bot%20applications.commands').then(message => console.log(`[run]${msg.author.tag} used ${msg.content}`)).catch(console.error);
    } catch(e) {
      msg.channel.send(e.message);
    }
  }
});

client.login(process.env.TOKEN);