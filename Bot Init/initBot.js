module.exports.botInit = function init(TokeArg, BotName) {
//Inital Consts and Variables
const Discord = require('discord.js');
const client = client1 = new Discord.Client();
Toke = TokeArg;


//Variables

//The Prefix Character
var char = "$"

//Functions

//Command Value Function
function cmdv(){
	message.channel.send('Hello. This is the default settings. Please setup this bot with the proper CmdV Value.')
}

//Command Function
function cmd(int){
	if(int == 0) {
		client.on('message', function(message) {
			cmdv();
		});
	} else if (int == 1) {
		console.log('cmd(1); Is currently not finished yet. Please try again later.')
	}
};

//Responds Bot is Ready When Script is Ready
client.on('ready', () => {
	//Temporary Function
	function setGame(gameName) {
		client.user.setPresence({ game: { name: gameName, type: 0 } });
	}
	setGame('Type $help')
	console.log('Bot: Ready.');
});


//Official setGame Function
function setGame(gameName) {
	client.user.setPresence({ game: { name: gameName, type: 0 } });
}


//Welcome Message
client.on('guildMemberAdd', function(member) {
	member.guild.channels.find("name", "welcome").sendMessage("Welcome " + member.toString() + " to the server!");


});



//Commands Explination:
//If The Client is On Check if there is a message that is equivilant to: Prefix + (Command)

//Commands


client.on('message', function(message) {

	//Help
	if (message.content == char + 'help') {
		message.channel.send("```Commands: \n "+char+"help \n "+char+"ping \n "+char+"embed \n "+char+"reply \n "+char+"shutdown \n "+char+"setgame \n "+char+"setprefix \n "+char+"author \n "+char+"invite \nEnd Of Commands```");
	}

//Ping
  if (message.content === char + 'ping') {
    message.reply('pong');
  }

//Shutdown
	if (message.content == char + "shutdown") {
		if(message.author.id == '209015289990348800') {
  			//Has One of Specified Roles
		message.channel.send('Shutdown '+BotName+'.');
		client.destroy((err) => {
        console.log(err);
		});
		} else {
  			//Does Not Have One of Specified Roles
  			message.reply('Insufficient Permissions'); //Confirm The Player Has Insufficient Permissions
		}
	}

//Embed
	if (message.content.startsWith (char + "embed")) {
		const args = message.content.split(/\s+/g).slice(1);
		message.channel.sendEmbed(new Discord.RichEmbed()
			.setDescription(args.slice(1).slice(1).join(' '))
			.setTitle(args[0])
			.setColor(args[1])
		);
	}

//Reply
  if (message.content === char + 'reply') {
    message.channel.send("What's up "+message.author.toString()+'!');
  }

//SetGame
	if (message.content.startsWith(char + 'setgame')) {
		if(message.author.id == '209015289990348800') {
  			//Has One of Specified Roles
  			const args = message.content.split(/\s+/g).slice(1);
  			let gameStatus = args.join(' '); //The Game To Set
  			setGame(gameStatus); //Set The Specified Game Status
  			message.reply('The game status is now set to '+gameStatus+'.'); //Confirm The Game Status Was Set
		} else {
  			//Does Not Have One of Specified Roles
  			message.reply('Insufficient Permissions'); //Confirm The Player Has Insufficient Permissions
		}
	}

//SetPrefix
	if (message.content.startsWith(char + 'setprefix')) {
		if(message.author.id == '209015289990348800') {
  			//Has One of Specified Roles
  			const args = message.content.split(/\s+/g).slice(1);
  			let char = args.join(' '); //The Prefix To Set
  			message.channel.send('Command Prefix set to '+char+' .'); //Confirm The Command Prefix Was Set
		} else {
  			//Does Not Have One of Specified Roles
  			message.reply('Insufficient Permissions'); //Confirm The Player Has Insufficient Permissions
		}
	}

//Author
	if (message.content == char + 'author') {
		message.channel.send(message.author.toString());
	}

//Invite
	if (message.content == char + 'invite') {
		message.author.send('https://discord.gg/XdVxzPA');
		message.channel.send('Invite sent.');
	}


});
//Finalizing Steps

//Login to the Bot's User Through: User Token
client.login(Toke);
};