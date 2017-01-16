var commands = require('./command'); 
process.stdout.write('prompt > '); 

process.stdin.on('data', function(data){
	var args = data.toString().trim().split(" "); 

	var cmd = args[0]; 
	var textInput = args.slice(1).join(" "); 

	commands[cmd](textInput); 
	process.stdout.write("\n" + "prompt > ");

	}); 




