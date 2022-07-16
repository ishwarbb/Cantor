const { SlashCommandBuilder } = require('@discordjs/builders');

const VocAPI = require("voc-api");
const voc = new VocAPI();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wotd')
		.setDescription('What a nice day to learn a new word'),
	async execute(interaction) {
        var output = "Hey work still in progress :(";
        
        voc.login("ishwar b","shane124");
        voc.checkLogin();
        
		await interaction.reply(output);
	},
};