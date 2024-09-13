const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1283962483220025547')
    .setType('STREAMING')
    .setURL('https://twitch.tv/developer') //Must be a youtube video link 
    .setState('きみを想うたび')
    .setName('yume')
    .setDetails(`I・LOVE・YOU!!`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://i.postimg.cc/wTXgYgRr/Untitled1052_20240912203447.gif') //You can put links in tenor or discord and etc.
.setAssetsSmallImage('https://media.discordapp.net/attachments/1011444419838353429/1209562835554795621/IMG_7539.png?ex=65e7602c&is=65d4eb2c&hm=1f08e61c53bbe9e6e888a6442f1adb5863b3d811b4d5a251926a0bc021f4323a&')
    .setAssetsLargeText('赤く色づくの♡') //Text when you hover the Large image
    .addButton('⟡', 'https://rentry.co/avginshajin')

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `I・LOVE・YOU!!`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
