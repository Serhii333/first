function every(arr, func) {
	var result = true;
	arr.forEach(function(item, index, array){
		if (!func(item, index, array)){
				result = false;
		}
	})
	return result;
}
