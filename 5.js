function templater(templateString, dataObj) {
	for(var key in dataObj){
   var re = new RegExp('\\${'+key+'}',"g");
	 templateString = templateString.replace(re, dataObj[key])
   console.log(templateString, re)

	}
	return templateString;
}


templater('${who} ${action} ${what}', {
 who: 'mama',
 action: 'mila',
 what: 'ramu'
});; // 'mama mila ramu'
