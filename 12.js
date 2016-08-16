
var s1 = new Sequence(['one', 'two', 'three']);


function Sequence(arr){
  this.arr = arr;
  this.index = 0;

}

Sequence.prototype = {
  go:function(index){
    var resultIndex;

    if(index > this.arr.length - 1){
        resultIndex = this.arr.length - 1;
        //elem = this.arr.slice(arr.length-1, arr.length);
    }else{
        resultIndex = index;
      //  elem = this.arr.slice(index, 1);

    }
    this.index = resultIndex;
    return this.arr[this.index];
  },
  prev:function(){
    if(this.index == 0){
      this.index = this.arr.length - 1;
    }else{
      this.index--;
    }
    return this.arr[this.index];
  },
  next:function(){
    if(this.index == this.arr.length - 1){
      this.index = 0;
    }else{
      this.index++;
    }
    return this.arr[this.index];
  },
}
