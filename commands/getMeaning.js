const { SlashCommandBuilder } = require('@discordjs/builders');

const axios = require('axios');

var data = "";

axios
  .get('https://example.com/todos')
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
    data = res;
  })
  .catch(error => {
    console.error(error);
  });


module.exports = {
	data: new SlashCommandBuilder()
		.setName('getMeaning')
		.setDescription('Gives meaning of the word instantly!'),
	async execute(interaction) {
		await interaction.reply(data);
	},
};