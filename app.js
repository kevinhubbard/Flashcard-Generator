function BasicCard(front, back){
	this.front = front;
	this.back = back;
}

function ClozeCard(text, cloze){
	this.text = text;
	this.cloze = cloze;

	this.clozeDeleted = function(){
		//code to return the cloze deleted portion of text
	}

	this.partialText = function(){
		//code to return only the partial text
	}

	this.fullText = function(){
		//returns the full text
	}

	this.error = function(){
		//error if cloze deletion does not appear in the input text
	}
}

var firstPresident = new BasicCard(
	"Who was the first president of the United States?", "George Washington");

console.log(firstPresident.front);
console.log(firstPresident.back);