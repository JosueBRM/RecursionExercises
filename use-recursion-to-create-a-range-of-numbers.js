function rangeOfNumbers(startNum, endNum) {
  
  //Caso Base
  if(endNum < startNum){
    return [];
  
  //Cualquier otro caso, se llama a la misma funcion
  }else{
    let arrRange = rangeOfNumbers(startNum, endNum - 1);
    arrRange.push(endNum);
    return arrRange;
  }
  
};