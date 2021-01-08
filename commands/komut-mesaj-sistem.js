const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setTitle('CloudUP Komut Mesaj Sistem')
.setDescription(`\`${client.ayarlar.prefix}komut ekle\`
**Oluşturmak istediğin komut ismini ve cevabı girmen gerekir**

\`${client.ayarlar.prefix}komut tablo\`
**Oluşturulan komutları buradan görebilirsiniz**

\`${client.ayarlar.prefix}komut sil\`
**Komut ismini girerek istediğiniz komutunuzu silebilirsiniz**`)
.setImage('https://media.giphy.com/media/KH82JoQHbxM5sb82Rq/giphy.gif')
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png'))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'komut-mesaj-sistem'
};