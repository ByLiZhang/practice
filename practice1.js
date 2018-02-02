var newString = '';
var index = 0;
while ( index < test_array.length ) {
  newString += test_array[index][0] + test_array[index][test_array[index].length-1];     //test_array.slice(-1);
  index ++;
}


var newArray = [];
for (var i= 0; i < test_array.length; i++) {
  if (vowelCount(test_array[i]) > 1) {
    newArray.push(test_array[i]);
  }
}


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
  var count = 0;
  for( var letterIndex =0; letterIndex < string.length; letterIndex++){
    if( vowels.indexOf(string[letterIndex])!==-1){
      count++;
    }
  }
}
