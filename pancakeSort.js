function pancakeSort(arr) {	
	for (var i = arr.length-1; i >= 1; i--) {
		var max = arr[0];
		var max_index = 0;
		for (var j = 1; j <= i; j++) {  //find out the current max and its index
			if (arr[j] > max){
				max = arr[j];
				max_index = j;
			}
		}

        if (max_index === i) {  //check if the current max is already at the correct position 
            continue;
        }

        var flipper;
		if (max_index > 0) {  //when the current max is not at the first position, flip it to the top
			flipper = arr.splice(0, max_index+1);
			arr = flipper.reverse().concat(arr);  //the current max is at the top now
		}

		flipper = arr.splice(0, i+1);
		arr = flipper.reverse().concat(arr);  //flip the current stack so that the max goes to the right position
	}
	return arr;
}

var testArr = [3,5,2,9,1,7,6,4,8];  //sample array 
var result = pancakeSort(testArr);
result;


