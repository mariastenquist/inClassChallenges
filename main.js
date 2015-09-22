//remember to capitalize a constructor class name (Quote)

var Quote = function(text, author){

	this.text = text || "This is so empty";
	this.author = author || "anonymous author";
	//an empty string passed is falsey. A space is still read as a space (' ')
	// this.default = default;
		// console.log(this)
}

var firstQuote = new Quote ("The Alchemist is cool", "Paulo Coelho")
console.log(firstQuote)

var notSoGreatQuote = new Quote('')
// console.log(notSoGreatQuote)



Quote.prototype.countWords = function() {
	console.log(this.text.split(' ').length)

	// console.log(this.text.length + 'is the count position of the text')
}

Quote.prototype.yell = function() {
	console.log( this.text.toUpperCase() + '!!!!!!!')
	
}

var bestQuote = new Quote ("More more more", "billy idol")
bestQuote.yell()

bestQuote.countWords()