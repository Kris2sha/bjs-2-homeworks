"use strict"
function solveEquation(a, b, c) {

  let arr = {};
  let D = b*b-4*a*c;
  if (D>0){
    let res = [];
    res.push ((-b + Math.sqrt(D))/(2*a));
    res.push ((-b - Math.sqrt(D))/(2*a));
    arr = res;
    console.log (res);
  } else if (D==0) {
    let result = [];
    result.push (-b/(2*a));
    arr=result;
    console.log (result);
  } else if (D<0){
    console.log ("Нет решений");
  }
  return arr; // array
}
