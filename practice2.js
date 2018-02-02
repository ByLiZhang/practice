var test = "I'm a testing sentence from Cody's practice session";


function reverseSentence(string) {
	var words = string.toLowerCase().split(' ');
	var newWords = [];
	for (var i = 0; i < words.length; i++){
		var wordArr = words[i].split('').reverse();
		wordArr[0] = wordArr[0].toUpperCase();
		var newWord = wordArr.join('');
		newWords.push(newWord);
	}
	return newWords.join(' ');	
}

reverseSentence(test);