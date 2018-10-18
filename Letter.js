var Letter = function(ltr) {
	this.letter = ltr;
	this.displayLetter =  false;

	this.setToDisplay = function() {
		this.displayLetter = true;
	}

	this.getLetter = function() {
		if (this.displayLetter) {
			return this.letter;
		} else {
			return '_';
		}
	}
}

module.exports = Letter;