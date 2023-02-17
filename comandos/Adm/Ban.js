const Discord = require("discord.js")

module.exports = {
  name: "ban", // Coloque o nome do comando
  description: "vou cancelar o cpf do malandro.", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
        name: "user",
        description: "Mencione um usuário para ser banido.",
        type: Discord.ApplicationCommandOptionType.User,
        required: true,
    },
    {
        name: "motivo",
        description: "Insira um motivo.",
        type: Discord.ApplicationCommandOptionType.String,
        required: false,
    }
],

  run: async (client, interaction) => {

    if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.BanMembers)) {
        interaction.reply(`Tem patente para essa pora ai não irmão.`);
    } else {
        let userr = interaction.options.getUser("user");
        let user = interaction.guild.members.cache.get(userr.id)
        let motivo = interaction.options.getString("motivo");
        if (!motivo) motivo = "Não definido.";

        let embed = new Discord.EmbedBuilder()
        .setColor("Green")
        .setDescription(`O usuário ${user} (\`${user.id}\`) Foi de vapo!`);

        let erro = new Discord.EmbedBuilder()
        .setColor("Red")
        .setDescription(`Não consegui apagar o  ${user} (\`${user.id}\`) do servidor cara !`);

        user.ban({ reason: [motivo] }).then( () => {
            interaction.reply({ embeds: [embed] })
        }).catch(e => {
            interaction.reply({ embeds: [erro] })
        })
    }

  }
}