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
    .setState('永遠愛在一起')
    .setName('maso')
    .setDetails(`།𓎟𓎟†𓎟𓎟།`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1011444419838353429/1199368605565992980/Untitled574_20240123085905.png?ex=65c24a0e&is=65afd50e&hm=e3797548a81577836a18193dd0fc8f6bcf5a1b5b524666fa4c7b694b1e404f82&') //You can put links in tenor or discord and etc.
.setAssetsSmallImage('https://media.discordapp.net/attachments/1011444419838353429/1199368606010572980/Untitled550_20240123085831.png?ex=65c24a0e&is=65afd50e&hm=4671c01048c29c88c30a7164c72b467101ab909391953474ca817a60407e2684&')
    .setAssetsLargeText('在一起真好') //Text when you hover the Large image
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
