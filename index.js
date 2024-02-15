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
    .setState('𝗒𝗈𝗎 𝗹𝗲𝘁 𝗺𝗲 𝖼𝗋𝗒...')
    .setName('maso')
    .setDetails(`♡ 𝗵𝗼𝗹𝗱 𝗺𝗲 𝗴𝗲𝗻𝘁𝗹𝘆`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1011444419838353429/1207575316848185354/Untitled608_20240215001901_2.gif?ex=65e02527&is=65cdb027&hm=c720d28f67e4948f9e5385da96216acf1cd4594240e798ecc90b2c427fcabd59&') //You can put links in tenor or discord and etc.
.setAssetsSmallImage('https://media.discordapp.net/attachments/1011444419838353429/1207575317372211220/blur_edges_326.png?ex=65e02527&is=65cdb027&hm=cdb1f6c5e728a74a095ce66e8d86e7a988802b9354e0eab9c31affe624e264d9&')
    .setAssetsLargeText('𝖺𝗇𝖽 𝘄𝗶𝗽𝗲 𝗺𝘆 𝖾𝗒𝖾𝗌') //Text when you hover the Large image
    .addButton('†', 'https://rentry.co/diezai')

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `♡ 𝗵𝗼𝗹𝗱 𝗺𝗲 𝗴𝗲𝗻𝘁𝗹𝘆`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
