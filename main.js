function myFunction(x,y) {
  
  if (x == 20) {
    return true;
  } else if (y == 20) {
    return true;
  } else if (x + y <= 20) {
    return true;
  } return false;
}
console.log(myFunction(1,21));