Реализовать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число, возвращает новый массив.
Число показывает количество элементов в подмассивах, элементы подмассивов беруться из массива data.
Оригинальный массив не должен быть изменен.

toMatrix([1,2,3,4,5,6,7,8,9], 3); // [[1,2,3], [4,5,6], [7,8,9]]
toMatrix([1,2,3,4,5,6,7], 3); // [[1,2,3], [4,5,6], [7]]
toMatrix([1,2,3], 5); // [[1,2,3]]
toMatrix([], 3); // []

function iterator(arr, n){
		var current = 0;
		return function(){

       var end = current + n;

       var chunk = arr.slice(current, end);
        current = end;
       return chunk;

		}

	}

  var getNext = iterator([1,2,3,4,5,6,7,8,9], 3);




	function iterator(arr, n){
			var current = 0;
	    var arrNew = [];
	    arrNew.push(chunk);

			return function(){

		       var end = current + n;

		       var chunk = arr.slice(current, end);
		       current = end;
		       return chunk;

			}
			return arrNew;
	    console.log(current)
	}



	function toMatrix (data, rowSize) {
		var getNext = iterator(data, rowSize);
		var result = [];
		var chunk = getNext();
		while(chunk.length>0){
				result.push(chunk);
				chunk = getNext();
		}
		return result;
		function iterator(arr, n){
			var current = 0;
			return function(){

	       var end = current + n;

	       var chunk = arr.slice(current, end);
	        current = end;
	       return chunk;

			}

	}
}


function toMatrix (data, rowSize) {
	var instance = new iterator(data, rowSize);

	var result = [];
	var chunk = instance.getNext();
	while(chunk.length>0){
			result.push(chunk);
			chunk = instance.getNext();
	}
	return result;
	function iterator(arr, n){
				var current = 0;
        this.arr = arr;
        this.n = n;
				this.getNext = function(){

	        var end = current + this.n;

	        var chunk = this.arr.slice(current, end);
	           current = end;
	           return chunk;

				}

	}
}


toMatrix([1,2,3,4,5,6,7,8,9], 3);
