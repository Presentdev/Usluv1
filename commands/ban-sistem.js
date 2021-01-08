const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setTitle('CloudUP Ban Sistem').setDescription(`
\`${client.ayarlar.prefix}ban-log [@kanalEtiket]\`
**Belirtilen kanala yasaklanma bilgisini gönderir**

\`${client.ayarlar.prefix}ban-yetki-role [@rolEtiket]\`
**Belirtilen rolü olan kişi sadece yasaklama yapabilir**
\`\`\`Komutları kapatma kısmı aşağıda\`\`\`

\`${client.ayarlar.prefix}ban-yetki-role-kapat\`
**Yasaklama yetkili rolünü kapatır**

\`${client.ayarlar.prefix}ban-kanal-kapat\`
**Ban log kanalını sıfırlar**

**Ban komut nasıl kullanırım?**

\`${client.ayarlar.prefix}ban @üyeetiketi açıklama\`

🔨 \`${client.ayarlar.prefix}unban [Kullanıcı ID]\`
**Sunucunuzdan yasaklı kullanıcının yasağını kaldırır**`)
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'ban-sistem'
};