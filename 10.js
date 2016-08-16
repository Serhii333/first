var str = "user=true&age=29&name=Evgen";
undefined
str.split('&')
["user=true", "age=29", "name=Evgen"]
var arr = str.split('&');
undefined
arr
["user=true", "age=29", "name=Evgen"]
arr[0].split('=')
["user", "true"]
JSON.parse('true')
true
JSON.parse('20')
20



function queryStringToObject(queryString) {

	var arr = queryString.split('&');
    var newArr = [];
    var obj = {};

    arr.forEach(function(item, index, array){
        var newArr = arr[index].split('=');
        var first = newArr[0];
        var second = JSON.stringify(newArr[1]);
        obj[first] = second;

    })
		return obj;
}


queryStringToObject("user=true&age=29&name=ghj")



function queryStringToObject(queryString) {

	var arr = queryString.split('&');
    var newArr = [];
    var obj = {};

    arr.forEach(function(item, index, array){
        var newArr = arr[index].split('=');
        var first = newArr[0];
        if (newArr[1] != undefined){

		        var second = function(){
		           try{
		               return JSON.parse(newArr[1]);
		            }catch(e){
		                return decodeURIComponent(newArr[1]);
		            }
		        };

        		obj[first] = second();
         }
    })
		return obj;
}
