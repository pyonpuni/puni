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
    .setApplicationId('1170948236769493052')
    .setType('STREAMING')
    .setURL('https://twitch.tv/developer') //Must be a youtube video link 
    .setState('𝖺𝗅𝗅𝗈𝗐 𝗺𝗲 𝗍𝗈 𝗆𝖺𝗄𝖾 𝘆𝗼𝘂 𝖺𝗇')
    .setName('maso')
    .setDetails(`⟡ 𝘄𝗵𝗶𝗺𝘀 𝗼𝗳 𝗳𝗮𝘁𝗲`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1011444419838353429/1205194511916073050/Untitled602_20240208093910_1.gif?ex=65d77bdb&is=65c506db&hm=524e75614699a5ca03aa0a4e4321b20fbee9ae09c9bbd8add0ed9a5e63226f78&') //You can put links in tenor or discord and etc.
.setAssetsSmallImage('https://media.discordapp.net/attachments/1011444419838353429/1205194511555493928/blur_edges_319.png?ex=65d77bda&is=65c506da&hm=c57699a42a1264c64a6feb14cceefd3442150d2c369da13e63ec970f5bc9ab35&')
    .setAssetsLargeText('𝗼𝗳𝗳𝗲𝗿. 𝗈𝗇𝖾 𝗒𝗈𝗎 𝗰𝗮𝗻𝘁 𝗋𝖾𝖿𝗎𝗌𝖾') //Text when you hover the Large image
    .addButton('†', 'https://rentry.co/uso')

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `⟡ 𝘄𝗵𝗶𝗺𝘀 𝗼𝗳 𝗳𝗮𝘁𝗲`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
