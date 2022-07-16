const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('get-meaning')
    .setDescription('Gives meaning of the word instantly!')
    .addStringOption(option =>
      option.setName('input-word')
        .setDescription('input-word')
        .setRequired(true)),
  async execute(interaction) {
    var data = "a";
    const string = interaction.options.getString('input-word');

    const https = require('https');

    const options = {
      hostname: 'vocabulary.vercel.app',
      port: 443,
      path: '/word/' + string,
      method: 'GET',
    };


    const req = https.request(options, res => {
      console.log(`statusCode: ${res.statusCode}`);

      res.on('data', d => {
        console.log("data1 = ",data);
        data = JSON.parse(d);
        data = data.data;

        console.log("data2 = ",data);
        if(data == "") 
        {
          interaction.reply("Opps could not fetch!");
          return;
        }
        interaction.reply(data);
      });
    });

    req.on('error', error => {
      console.error(error);
    });

    req.end();
    console.log("data1 = ",data);
    // await interaction.reply(data);
  },
};

