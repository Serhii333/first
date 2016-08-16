function someFunc(options) {
	var defaultOptions = {
		index: 0,
		animate: false
	};

	for(var key in options){
			defaultOptions[key] = options[key]
	}

	return defaultOptions;
}


console.log(someFunc({index: 20}););
