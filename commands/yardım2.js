const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['', ''];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`**Yardım 2 Menüsüne Hoş Geldin Dostum 😇**
\`\`\`${client.user.username} Kullanırken @𝙿𝙸𝙽𝙶 rolünü en yukarıda tutunuz.\`\`\`

**\`${client.ayarlar.prefix}mute-sistem\`
Chat ve Seste mute için güzel sistem

\`${client.ayarlar.prefix}jail-sistem\`
Etiketlediğiniz Üyeyi karantina altına al

 \`${client.ayarlar.prefix}ban-sistem\`
Etiketlediğiniz üyeyi sunucunuzdan yasaklarsınız

 \`${client.ayarlar.prefix}toplu-rol-sistem\`
Toplu rol ile hem alıp hem de verebileceğiniz sistem

 \`${client.ayarlar.prefix}sayaç-sistem\`**
**Giriş Çıkış**, **Sayaç** hem de **otomatik rol** aynı anda çalıştır

 **\`${client.ayarlar.prefix}kısıtlamalar\`**
**Selam, küfür, reklam, büyük harf,** içerikler vardır
**

**`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['y2', 'help2'],
  permLevel: 0
}

exports.help = {
  name: 'yardım2'
};