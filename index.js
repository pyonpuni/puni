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
    .setApplicationId('1208170235589431317')
    .setType('STREAMING')
    .setURL('https://twitch.tv/developer') //Must be a youtube video link 
    .setState('𝗒𝗈𝗎 𝗹𝗲𝘁 𝗺𝗲 𝖼𝗋𝗒...')
    .setName('maso')
    .setDetails(`𝗶'𝗹𝗹 𝘁𝗮𝗸𝗲 𝗶𝘁 𝗮𝗹𝗹 .ᐟ`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1011444419838353429/1209562592343883866/Untitled644_20240220111029_1.gif?ex=65e75ff2&is=65d4eaf2&hm=30706a61e23690338726025a0fca2eca5935474153daca35b19886e9356fd5e3&') //You can put links in tenor or discord and etc.
.setAssetsSmallImage('https://media.discordapp.net/attachments/1011444419838353429/1209562835554795621/IMG_7539.png?ex=65e7602c&is=65d4eb2c&hm=1f08e61c53bbe9e6e888a6442f1adb5863b3d811b4d5a251926a0bc021f4323a&')
    .setAssetsLargeText('𝖺𝗇𝖽 𝘄𝗶𝗽𝗲 𝗺𝘆 𝖾𝗒𝖾𝗌') //Text when you hover the Large image
    .addButton('⟡', 'https://rentry.co/avginshajin')

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `𝗶'𝗹𝗹 𝘁𝗮𝗸𝗲 𝗶𝘁 𝗮𝗹𝗹 .ᐟ`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
