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
    .setState('𝗂 𝘄𝗮𝗻𝗻𝗮 𝖻𝖾 𝗍𝗁𝖾 𝗺𝗲𝘀𝘀𝗶𝗮𝗵')
    .setName('maso')
    .setDetails(`⟡ 𝘄𝗵𝗶𝘁𝗲 𝗮𝗻𝗴𝗲𝗹`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1011444419838353429/1203281933161857034/Untitled601_20240203030253_3.gif?ex=65d086a0&is=65be11a0&hm=80e57a2073fd2507ebd013e366c5190b1f4c26e05625a49c1f0e93345a146f67&') //You can put links in tenor or discord and etc.
.setAssetsSmallImage('https://media.discordapp.net/attachments/1011444419838353429/1203281933623099393/IMG_6535.gif?ex=65d086a0&is=65be11a0&hm=7dd666173ca91f656dd659a40d5177fb71df5027341816b3ed1d1702613819b3&')
    .setAssetsLargeText('𝗍𝗁𝖾 𝗼𝗻𝗲 𝗐𝗁𝗈 𝗻𝗲𝘃𝗲𝗿 𝖽𝗂𝖾𝗌') //Text when you hover the Large image
    .addButton('†', 'https://rentry.co/aspdgojo')

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `⟡ 𝘁𝗿𝘂𝗲 𝘀𝗮𝘃𝗶𝗼𝘂𝗿`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
