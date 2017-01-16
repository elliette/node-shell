//console.log(process); 

var commands = require('./command'); 
//var userCommand = 

process.stdout.write('prompt > '); 

process.stdin.on('data', function(data){
	var cmd = data.toString().trim(); 
	commands[cmd](); 
})

//console.log("COMMANDS ARE "+ commands);



	