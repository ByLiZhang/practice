var test = "I'm a Testing Sentence From Cody's Practice Session";


function reverseWordsInSentence(string) {
	var words = string.toLowerCase().split(' ');
	var newWords = [];
	for (var i = 0; i < words.length; i++){
		var letterArr = words[i].split('').reverse();
		letterArr[0] = letterArr[0].toUpperCase();
		var newWord = letterArr.join('');
		newWords.push(newWord);
	}
	return newWords.join(' ');	
}

reverseWordsInSentence(test);