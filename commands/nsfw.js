const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setTitle(`🔞`).setDescription(`**c!anal
c!4k
c!ass
c!pgif
c!hentai
c!pussy
c!thigh**`));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'nsfw'
};