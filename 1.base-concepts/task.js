"use strict"
function solveEquation(a, b, c) {

  let arr = {};
  let D = b*b-4*a*c;
  if (D>0){
    let res = [];
    res.push ((-b + Math.sqrt(D))/(2*a));
    res.push ((-b - Math.sqrt(D))/(2*a));
    arr ["Квадратные корни"] = res;
  } else if (D==0) {
    arr ["Квадратные корни"] = (-b/(2*a));
  } else if (D<0){
    console.log ("Нет решений");
  }
  return arr; // array
}
