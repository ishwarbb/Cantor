const { SlashCommandBuilder } = require('@discordjs/builders');

const VocAPI = require("voc-api");
const voc = new VocAPI();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('auto-complete')
		.setDescription('Gives suggestions for an entered word!')
        .addStringOption(option =>
            option.setName('input-word')
              .setDescription('input-word')
              .setRequired(true)),
	async execute(interaction) {

        var searchTerm = interaction.options.getString('input-word');
        voc.autoComplete(searchTerm).then((definition) => {
            console.log(definition);
            var x = "";
            x += "Did you mean: \n";
            var i = 0;
            while(definition[i] != undefined)
            {
                x += i + ") " + definition[i].word +"\n";
                // console.log(i + ") " + definition[i].word);
                i++;
            }

            interaction.reply(x);
        }

        );
	},
};


