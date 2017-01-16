// console.log(process); 



process.stdout.write('prompt > ');

process.stdin.on('data', function(data){
	var cmd = data.toString().trim(); 
	if (cmd === 'pwd'){
		process.stdout.write(process.argv[1]); 
	} else if (cmd === 'date'){
		var dateTime = new Date(); 
		process.stdout.write(dateTime.toString()); 
	} else {
		process.stdout.write('You typed: ' + cmd);
		process.stdout.write('\nprompt > '); 
	}
}); 