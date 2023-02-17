const Discord = require("discord.js")

module.exports = {
  name: "unban", // Coloque o nome do comando
  description: "Vou recuperar o cpf dele.", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
        name: "user",
        description: "fala ai quem vai voltar.",
        type: Discord.ApplicationCommandOptionType.User,
        required: true,
    },
    {
        name: "motivo",
        description: "tem um motivo para ele voltar ?.",
        type: Discord.ApplicationCommandOptionType.String,
        required: false,
    }
],

  run: async (client, interaction) => {

    if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.BanMembers)) {
        interaction.reply(`Voce não tem patente para essa porra ai não.`);
    } else {
        let user = interaction.options.getUser("user");
        let motivo = interaction.options.getString("motivo");
        if (!motivo) motivo = "Não definido.";

        let embed = new Discord.EmbedBuilder()
        .setColor("Green")
        .setDescription(`O usuário ${user} (\`${user.id}\`) teve o Cpf recuperado!`);

        let erro = new Discord.EmbedBuilder()
        .setColor("Red")
        .setDescription(`Não consegui recuparar o cpf do ${user} (\`${user.id}\`) Não cara !`);

        interaction.guild.members.unban(user.id, motivo).then( () => {
            interaction.reply({ embeds: [embed] })
        }).catch(e => {
            interaction.reply({ embeds: [erro] })
        })
    }

  }
}