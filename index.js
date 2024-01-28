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
    .setState('𝗐𝖾 𝗱𝗼𝗻𝘁 𝗐𝖺𝗇𝗍 𝗍𝗈 𝗺𝗮𝗸𝗲')
    .setName('maso')
    .setDetails(`།𓎟𓎟†𓎟𓎟།`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1011444419838353429/1201105598197014578/Untitled585_20240128034024_4.gif?ex=65c89bc2&is=65b626c2&hm=8e58f8dcfeca436ae2e1fd00b79ad986d2a725fbc91aa84f011a869e842efc93&') //You can put links in tenor or discord and etc.
.setAssetsSmallImage('https://media.discordapp.net/attachments/1011444419838353429/1201105598742286346/IMG_6142.gif?ex=65c89bc2&is=65b626c2&hm=55b6fdf15897811a605be18a93325085bb25144fd55c4b7692835964c82ebb18&')
    .setAssetsLargeText('✚ ₊  𝘁𝗵𝗲 𝖼𝗁𝗂𝗅𝖽𝗋𝖾𝗇 𝗰𝗿𝘆...') //Text when you hover the Large image
    .addButton('♡', 'https://rentry.co/pien')

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `།𓎟𓎟†𓎟𓎟།`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
