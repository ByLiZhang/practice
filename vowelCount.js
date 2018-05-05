function vowelCount(string){
  var counter = 0;
  var vowel = 'aeiou';
  for (var i = 0; i < string.length; i++) {
    if (vowel.includes(string[i].toLowerCase())){
      counter++;
    }
  }
  return counter;
}

function otherVowelCount(string){
  var vowels = 'aeiouAEIOU'
  var counter = 0;
  for( var letterIndex =0; letterIndex < string.length; letterIndex++){
    if( vowels.indexOf(string[letterIndex])!==-1){
      counter++;
    }
  }
  return counter;
}
