function isInArray(arr) {

	var elements = Array.prototype.slice.call(arguments, 1, arguments.length);
	var result = true;
	elements.forEach(function(el){

		if (arr.indexOf(el) == -1){
			result = false;
		}
	})
	return result;
}

isInArray([1], 1, 2);
<!--        -----------               -->


function isInArray(arr) {

	var elements = Array.prototype.slice.call(arguments,1, arguments.length);
	var result = true;
	elements.forEach(function(el){

		arr.indexOf(el) == -1 ? result = false : null;

	})
	return result;
}
