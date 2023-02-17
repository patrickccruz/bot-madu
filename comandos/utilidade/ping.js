const Discord = require("discord.js")

module.exports = {
  name: "ping", // Coloque o nome do comando
  description: "Veja o ping do bot.", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    let ping = client.ws.ping;

    let embed_1 = new Discord.EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`Seu merda ${interaction.user}, essa porra de ping ai mais ou menos \`calculando...\`.`)
    .setColor("Random");

    let embed_2 = new Discord.EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`Olá ${interaction.user},E essa porra aqui msm cara ?? \`${ping}ms\`.`)
    .setColor("Random");

    interaction.reply({ embeds: [embed_1] }).then( () => {
        setTimeout( () => {
            interaction.editReply({ embeds: [embed_2] })
        }, 2000)
    })
  }
}

//const Discord = require("discord.js")

//module.exports = {
    //name: "", // Coloque o nome do comando
    //description: "", // Coloque a descrição do comando
    //type: Discord.ApplicationCommandType.ChatInput,
  
    //run: async (client, interaction) => {
  
  
   // }
 // }