const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
 if (!message.member.roles.cache.has("782959859297419296") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setDescription('Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!').setColor("Black"));
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send(new Discord.MessageEmbed().addField("Hatalı Kullanım",`Lütfen Bir Kullanıcı Etiketleyiniz`).setColor("RANDOM"));
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
   let isim = args[1];
      if(!isim) return message.channel.send(new Discord.MessageEmbed().addField("Hatalı Kullanım",`Lütfen Bir İsim Yazınız`).setColor("RANDOM")).then(m => m.delete({timeout: 5000}));
   let yas = args[2];
      if(!yas) return message.channel.send(new Discord.MessageEmbed().addField("Hatalı Kullanım",`Lütfen Bir Yaş Yazınız`).setColor("RANDOM")).then(m => m.delete({timeout: 5000}));
await member.setNickname(`🍵`)
  member.roles.add("774654724989386772"); 
  member.roles.remove("782181985509965854");
     const kanal = message.guild.channels.cache.find(c => c.id == "794092724508819466")
    const embed1 = new Discord.MessageEmbed() 
    .setDescription(`<@!${member.id}> Sunucumuza Hoşgeldin Seninle Beraber \`${member.guild.memberCount}\` Kişi Olduk \n <#KURALLAR> Kanalından Kuralları Okumayı Unutma`)
    .setColor("RANDOM")
  let embed = new Discord.MessageEmbed() 
  .setColor("RANDOM")
  .setTimestamp()
  .addField(`<a:ok_1:794139211053400084><a:AFK_UCGEN:761363716159438879>**Kayıt İşlemi Başarılı`, `<@!${member.id}>** **Adlı Kullanıcıya <@&774654724989386772> Rolünü Verdim!**<a:AFK_UCGEN:761363716159438879><a:ok_2:794139110952271903>`) 
  .setFooter(`Komutu Kullanan Yetkili : ${message.author.username}` ,message.author.avatarURL({dynamic: true }))
  return message.channel.send(embed).then(kanal.send(embed1)).then(m => m.delete({timeout: 20000}));
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kayıt" , "k"],
  permLevel: 0
}
exports.help = {
  name: 'kayıt',

}