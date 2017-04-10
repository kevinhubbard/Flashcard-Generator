var inquirer = require('inquirer');
var fs = require('fs');



function BasicCard(front, back){
	this.front = front;
	this.back = back;
}

/*//start the flashcard app
function start(){
	inquirer.prompt([
	{
		type: 'checkbox',
		name: 'start',
		message: 'Do you want to make a new flashcard or test yourself?',
		choices: ['New Flashcard', 'Test']
	}

		]).then(function(input){

			if(input.start[0] === 'New Flashcard'){
				newFlashcard();
			} else if (input.start[0] === 'Test') {
				console.log('start test function');	
			} else{
				console.log('something went wrong');
			}


	});
	

}

function newFlashcard(){
	inquirer.prompt([
	{
		type: 'input',
		name: 'answer',
		message: 'Answer to your question.'	
	},
	{
		type: 'input',
		name: 'question',
		message: 'Finish the question.'
	}

	]).then(function(response){
		var flashCard = new BasicCard(response.answer, response.question);

		fs.appendFile('flashcard.txt', flashCard.front + ' ' + flashCard.back + '\n', (err) =>{
			if (err) throw err;
			console.log('flashcard was saved!');
		});


});
}



start();*/



function ClozeCard(text, cloze){
	this.text = text;
	this.cloze = cloze;

	this.clozeDeleted = function(){
		console.log(this.cloze);
	}

	this.partialText = function(){
		var t = this.text;
		var r = t.replace(this.cloze, '...');
		console.log(r);
	}

	this.fullText = function(){
		console.log(this.text);
	}

	this.error = function(){
		//error if cloze deletion does not appear in the input text
	}
}



var cloze = new ClozeCard('kevin hubbard is an amazing person.', 'kevin hubbard');

cloze.partialText();