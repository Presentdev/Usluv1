const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['', ''];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`**Yardım 3 Menüsüne Hoş Geldin Dostum 😇**
\`\`\`${client.user.username} Kullanırken @𝙿𝙸𝙽𝙶 rolünü en yukarıda tutunuz.\`\`\`

 **\`${client.ayarlar.prefix}yasak-tag-sistem\`
Sunucunuz için güvenliği arttırın

 \`${client.ayarlar.prefix}oto-isim-sistem\`
Sunucunuza giren kullanıcıya istediğiniz şekilde otomatik isim ile adlandırmış yapabilirsin
 
 \`${client.ayarlar.prefix}komut-mesaj-sistem\`**
Sunucunuz için istediğiniz kadar **komut & **cevap** oluşturabilirsin**

 \`${client.ayarlar.prefix}fake-hesap-sistem\`**
Sunucunuza giren kullanıcı __5 gün__ içerisin de hesabını oluşturmuş ise cezalı verir

 \`${client.ayarlar.prefix}sunucu-tema-sistem\`**
Topluluk bağışları ile sunucu şablonlarına sahip ol! **${client.ayarlar.prefix}sunucu-kur** kullanabilirsin**

 \`${client.ayarlar.prefix}kanal arındır\`**
Sunucunuzda ki tüm **kanalları** silerek yardımcı olur (**Sunucu Sahibi**)

 \`${client.ayarlar.prefix}rol arındır\`
Sunucunuzda ki tüm **rolleri** silerek yardımcı olur (**Sunucu Sahibi**)


**`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['y3', 'help3'],
  permLevel: 0
}

exports.help = {
  name: 'yardım3'
};