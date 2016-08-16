function sequence(start, step) {
   start = start != undefined ? start : 0;
   step = step != undefined ? step : 1;
   var init = true;
   var current = start;
   return function(){
       if (init){
           init = false;
           return current;
       }else{
           return current = current + step;
       }

   }
}





var generator = sequence(10, 3);
var generator2 = sequence(7, 1);

console.log(generator()); // 10
console.log(generator()); // 13

console.log(generator2()); // 7

console.log(generator()); // 16

console.log(generator2()); // 8
