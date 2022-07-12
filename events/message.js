module.exports = {
	name: 'messageCreate',
	execute(messageCreate) {
        console.log(`The bot read the message ${messageCreate}`);
        if(messageCreate.content.indexOf('uwu') > -1
        || messageCreate.content.indexOf('Uwu') > -1 
        || messageCreate.content.indexOf('UWU') > -1
        || messageCreate.content.indexOf('UwU') > -1
        || messageCreate.content.indexOf('uWu') > -1
        || messageCreate.content.indexOf('uwU') > -1
        || messageCreate.content.indexOf('UWu') > -1
        || messageCreate.content.indexOf('uWU') > -1
        )
        {
            messageCreate.reply("OwO");
        }
	},
};