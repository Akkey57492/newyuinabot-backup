const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.on('ready', () => {
  //スタートした時に送信するテキスト
  console.log(`${client.user.tag} でログインしています。`)
  ////コンソールにYuinaBOT（仮）#1479 でログインしていますを記録する
  client.user.setActivity(`${client.guilds.cache.size} server's||-help`,{'type':'PLAYING'})
});

client.on('message', async msg => {
  if (msg.author.bot) {
    return 0;
  } else if (msg.content === '-ping') {
    try{
      msg.channel.send(client.ws.ping + "ms").then(message => console.log(`[run]${msg.author.tag} used ${msg.content}`)).catch(console.error);
    } catch(e) {
      msg.channel.send(e.message).then(message => console.log(`[run]${msg.author.tag} used ${msg.content}`)).catch(console.error);
    }
  } else if (msg.content === '-userid' || msg.content === '-user_id') {
    try{
      msg.channel.send(msg.author.id).then(message => console.log(`[run]${msg.author.tag} used ${msg.content}`)).catch(console.error)
    } catch(e) {
      msg.channel.send(e.message);
    }
  } else if (msg.content === '-channelid' || msg.content === '-channel_id') {
    try{
      msg.channel.send(msg.channel.id).then(message => console.log(`[run]${msg.author.tag} used ${msg.content}`)).catch(console.error)
    } catch(e) {
      msg.channel.send(e.message);
    }
  } else if (msg.content === '-serverid' || msg.content === '-guild_id' || msg.content === '-server_id' || msg.content === '-guildid') {
    try{
      msg.channel.send(msg.guild.id).then(message => console.log(`[run]${msg.author.tag} used ${msg.content}`)).catch(console.error)
    } catch(e) {
      msg.channel.send(e.message);
    }
  } else if (msg.content === '-botid') {
    try{
      msg.channel.send('897034926187229205').then(message => console.log(`[run]${msg.author.tag} used ${msg.content}`)).catch(console.error);
    } catch(e) {
      msg.channel.send(e.message);
    }
  } else if (msg.content === '-invite') {
    try{
      msg.channel.send('https://discord.com/api/oauth2/authorize?client_id=897034926187229205&permissions=8&scope=bot%20applications.commands').then(message => console.log(`[run]${msg.author.tag} used ${msg.content}`)).catch(console.error);
    } catch(e) {
      msg.channel.send(e.message);
    }
  } else if (msg.content.startsWith('-randint')) {
    try{
      command = msg.content.split(' ');
      if (command.length === 3) {
        var max = Number(command[2]);
        var min = Number(command[1]);
        var a = Math.floor(Math.random() * (max + 1 - min)) + min;
        msg.channel.send(String(a)).then(message => console.log(`[run]${msg.author.tag} used ${msg.content}`)).catch(console.error);
      } else {
        msg.channel.send('引数が不正です。');
      }
    } catch(e) {
      msg.channel.send(e.message);
    }
  } else if (msg.content.startsWith('-st')) {
    try {
      command = msg.content.split(' ');
      if (command.length === 1) {
        let data = fs.readFileSync('data.txt', 'utf8');
        data = data.split('|');
        let ud = '';
        let text = '';
        for (let i = 0;i < data.length;i += 1) {
          if (data[i].indexOf(`${msg.author.id} `) != -1) {
            ud = data[i];
          }
        }
        if (ud === '') {
          ud = `${msg.author.id} 1`;
          data.push(ud);
        }
        msg.channel.send(
          {embed: {
            color: 3066993,
            title: `${msg.author.tag}のstatus`,
            description: `レベル：　${ud.split(' ')[1]}`
          }}
        ).then(message => console.log(`[run]${msg.author.tag} used ${msg.content}`)).catch(console.error);
        for (let i = 0;i < data.length;i += 1) {
          if (data[i] != '') {
            text = text + `${data[i].split(' ')[0]} ${data[i].split(' ')[1]}|`;
          }
        }
        const text_2 = text.replace('\n', '');
        fs.writeFileSync('data.txt', text_2, 'utf8');
      } else if (command.length === 2) {
        let data = fs.readFileSync('data.txt', 'utf8');
        data = data.split('|');
        let ud = '';
        let text = '';
        for (let i = 0;i < data.length;i += 1) {
          if (data[i].indexOf(`${command[1]}} `) != -1) {
            ud = data[i];
          }
        }
        if (ud === '') {
          ud = `${command[1]} 1`;
          data.push(ud);
        }
        let id = command[1].replace('<', '');
        let id_1 = id.replace('>', '');
        let id_2 = id_1.replace('@', '');
        let id_3 = id_2.replace('!', '');
        user = await client.users.fetch(`${id_3}`);
        if (user === undefined) {
          msg.channel.send('不明なユーザーです。');
        } else {
          msg.channel.send(
            {embed: {
              color: 3066993,
              title: `${user.tag}のstatus`,
              description: `レベル：　${ud.split(' ')[1]}`
            }}
          ).then(message => console.log(`[run]${msg.author.tag} used ${msg.content}`)).catch(console.error);
          for (let i = 0;i < data.length;i += 1) {
            if (data[i] != '') {
              text = text + `${id_3} ${data[i].split(' ')[1]}|`;
            }
          }
          const text_2 = text.replace('\n', '');
          fs.writeFileSync('data.txt', text_2, 'utf8');
        }
      } else {
        msg.channel.send('引数が不正です。')
      }
    } catch(e) {
      msg.channel.send(e.message);
    }
  } else if (msg.content === '-help') {
    try {
      msg.channel.send(
        {embed: {
          color: 3066993,
          title: 'help',
          description: 'YuinaBOTのHelpです。',
          fields: [
            {
              name: '-ping',
              value: 'pingを表示します。'
            },
            {
              name: '-userid',
              value: 'あなたのIDを表示します。（別名：-user_id）'
            },
            {
              name: '-channelid',
              value: '実行したチャンネルのIDを表示します。（別名：-channel_id）'
            },
            {
              name: '-serverid',
              value: '実行したサーバーのIDを表示します。\n（別名：-guildid, -guild_id, -server_id）'
            },
            {
              name: '-botid',
              value: 'このBOTのIDを表示します。'
            },
            {
              name: '-invite',
              value: 'このBOTの招待リンクを表示します。'
            },
            {
              name: '-randint [min] [max]',
              value: 'min引数からmax引数の範囲で乱数を表示します。'
            },
            {
              name: '-st [user]',
              value: 'RPGのstatusを表示します。\nuserはoptionalです。\nuser引数はIDかメンションが指定できます。'
            }
          ]
        }}
      ).then(message => console.log(`[run]${msg.author.tag} used ${msg.content}`)).catch(console.error);
    } catch(e) {
      msg.channel.send(e.message);
    }
  }
});

client.login(process.env.TOKEN);