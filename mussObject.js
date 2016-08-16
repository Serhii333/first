function someFunc() {
    var args = toArray(arguments);
    var newArr = Array.prototype.args;
    console.log(arguments.forEach);
    console.log(args.forEach);
}



function toArray(obj) {
    var args = arguments;

    var newArr = [].map.call(args, function(x){
        return(x);
    })
    console.log(newArr);
}

toArray(1, 1, 2);


function toArray(obj) {
    return [].map.call(obj,function(x){return(x);})
}

function toArray(obj) {
    return [].map.call(obj,x => x)
}


function toArray(obj) {
    return [].slice.call(obj, 0 , obj.length)
}
