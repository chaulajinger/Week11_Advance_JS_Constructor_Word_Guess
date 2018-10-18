var exports = module.exports = {};

var wordBank = [
	"ant","baboon"
];
module.exports.getRandomWord = function () {
	var index = parseInt(Math.random() * (wordBank.length));
	return wordBank[index];
}