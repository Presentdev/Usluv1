const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['', ''];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`**𝙿𝙸𝙽𝙶 Ana Menüsüne Hoş Geldin Dostum :innocent:
${client.user} Kullanırken \`@𝙿𝙸𝙽𝙶\` rolünü en yukarıda tutunuz.**
**
 \`${client.ayarlar.prefix}kayıt-içerik\`

> Kayıt, Kutulu \`&\` Kutusuz, Diğer, Tag rol,
> Koruma, Say, Aktiflik, Mesaj tag

 \`${client.ayarlar.prefix}seviye-sistem\`

> Basit Seviye, Seviye sıralaması & büyük 
> depolama alan

 \`${client.ayarlar.prefix}yardım2\` Menüsün de neler var?

> Mute, Karantina, Ban, Toplu rol, Sayaç \`&\` Oto 
> rol, Kısıtlamalar

 \`${client.ayarlar.prefix}yardım3\` Menüsün de neler var?

> Yasak tag, Oto isim, Komut mesaj, Fake hesap, 
> Sunucu tema, Kanal arındır \`&\` Rol arındır


**`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['y', 'help'],
  permLevel: 0
}

exports.help = {
  name: 'yardım'
};