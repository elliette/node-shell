var fs = require('fs'); 

module.exports = {

	pwd: function(){ 
		process.stdout.write(process.argv[1]); 
	}, 
		
	date: function(){
		var dateTime = new Date(); 
		process.stdout.write(dateTime.toString()); 
	}, 

	ls: function(){
		var readFiles = fs.readdir('.', function(err, files){
			if (err) throw err; 
			files.forEach(function(file){
				process.stdout.write(file.toString() + "\n"); 
			})

		})
		readFiles; 
	}, 
	echo: function(text){
		process.stdout.write(text); 
	}

}