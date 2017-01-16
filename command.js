module.exports = {

	pwd: function(){ 
		//process.stdout.write('prompt > ');
		process.stdout.write(process.argv[1]); 
	}, 
		
	date: function(){
		var dateTime = new Date(); 
		process.stdout.write(dateTime.toString()); 
	}, 

}