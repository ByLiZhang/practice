var testArr = [3,5,2,1,7,6,4];

function pancakeSort(arr) {	
	for (var i = arr.length-1; i >= 1; i--) {
		var max = arr[0];
		var max_index = 0;
		for (var j = 1; j < i; j++) {
			if (arr[j] > max){
				max = arr[j];
				max_index = j;
			}
		}
        if (max_index === 0) {
            continue;
        }

		if (max_index > 0 && max_index !== i) {
			var flipper = arr.splice(0, max_index+1);
			arr = flipper.reverse().concat(arr);  //max is at the top now
			flipper = arr.splice(0, i+1);
			arr = flipper.reverse().concat(arr);  
		}
	}
	return arr;
}

var result = pancakeSort(testArr);
result;


// var testArr = [3,5,2,1,7,6,4];

// function pancakeSort(arr) {	
// 	for (var i = arr.length-1; i >= 1; i--) {
// 		var max = arr[0];
// 		var max_index = 0;
// 		for (var j = 1; j < i; j++) {
// 			if (arr[j] > max){
// 				max = arr[j];
// 				max_index = j;
// 			}
// 		}
// 		if (max_index > 0 && max_index !== i) {
// 			var flipper = arr.splice(0, max_index+1);
// 			arr = flipper.reverse().concat(arr);  //max is at the top now
// 			flipper = arr.splice(0, i+1);
// 			arr = flipper.reverse().concat(arr);  
// 		}
// 	}
// 	return arr;
// }

// var result = pancakeSort(testArr);
// result;

