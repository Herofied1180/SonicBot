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


if(message.guild.id == '283441973984231426') {
	char = '+'
}


//Official setGame Function
function setGame(gameName) {
	client.user.setPresence({ game: { name: gameName, type: 0 } });
}


//Commands Explination:
//If The Client is On Check if there is a message that is equivilant to: Prefix + (Command)

//Commands

//Help
client.on('message', function(message) {
	if (message.content == char + 'help') {
		message.channel.send("```Commands: \n "+char+"help \n "+char+"ping \n "+char+"embed \n "+char+"reply \nEnd Of Commands```");
	}
});

//Ping
client.on('message', function(message) {
  if (message.content === char + 'ping') {
    message.reply('pong');
  }
});

//Shutdown
client.on('message', function(message) {
	if (message.content == char + "shutdown") {
		if(message.member.roles.some(r=>[BotName+' Admin', 'Admin', 'Head Admin', 'Owner'].includes(r.name)) ) {
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
});

//Embed
client.on('message', function(message) {
	if (message.content == char + "embed") {
		message.channel.sendEmbed(new Discord.RichEmbed()
			.setDescription("Description")
			.setTitle("Title")
			.setColor("#4bf442")
		);
	}
});

//Reply
client.on('message', function(message) {
  if (message.content === char + 'reply') {
    message.channel.send("What's up "+message.author.toString()+'!');
  }
});

//SetGame
client.on('message', function(message) {
	if (message.content.startsWith(char + 'setgame')) {
		if(message.member.roles.some(r=>[BotName+' Admin', 'Admin', 'Head Admin', 'Owner'].includes(r.name)) ) {
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
});

//SetPrefix
client.on('message', function(message) {
	if (message.content.startsWith(char + 'setprefix')) {
		if(message.member.roles.some(r=>[BotName+' Admin', 'Admin', 'Head Admin', 'Owner'].includes(r.name)) ) {
  			//Has One of Specified Roles
  			let char = args.join(' '); //The Prefix To Set
  			message.channel.send('Command Prefix set to '+char+' .'); //Confirm The Command Prefix Was Set
		} else {
  			//Does Not Have One of Specified Roles
  			message.reply('Insufficient Permissions'); //Confirm The Player Has Insufficient Permissions
		}
	}
});



//Finalizing Steps

//Login to the Bot's User Through: User Token
client.login(Toke);
};