const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setTitle('Açmak ve kapatmak için: [ c!seviye aç / c!seviye kapat ]').setDescription('>>> `c!rank` `c!rank [@Etiket]` `(c!seviye - c!level)`\n`c!sıralama` `(c!top - c!toplist)`'))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['seviye'],
  permLevel: 0
}

exports.help = {
  name: 'seviye-sistem'
};