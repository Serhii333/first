function plus(obj){
  var str = '';
  for(var key in obj){
    str = str + key + '=' + obj[key] +'&';

    console.log(key, obj[key],str);

  }
  return str;
}


plus({user: 'Dmitry', password: 'pass'})
