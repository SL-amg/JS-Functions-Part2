/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {

    if(n%2 === 0){
        console.log(`False`)
        return n;
    }
    else{
        console.log(`True`)
        return n;
    }
  }

  isOdd(7);
  isOdd(10);

  /**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
    if(n%2 === 0){
        return (n/2);
    }
    else{
        return (((n/2)+0.5)-1);
    }
  }
 console.log(` number of odd numbers less than n is ` + oddsSmallerThan(15));
 console.log(` number of odd numbers less than n is ` + oddsSmallerThan(7));
 console.log(` number of odd numbers less than n is ` + oddsSmallerThan(22));
 console.log(` number of odd numbers less than n is ` + oddsSmallerThan(0));
 console.log(` number of odd numbers less than n is ` + oddsSmallerThan(-10)); // this will not work need absoulte values in equation

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
    if(n%2 === 0){
        return n = n*2 ;
    }
    else{
        return n = (n*n) ;
    }
  }
  console.log(` The solution is  ` + squareOrDouble(16));
  console.log(` The solution is  ` + squareOrDouble(9));
  console.log(` The solution is  ` + squareOrDouble(24));
  console.log(` The solution is  ` + squareOrDouble(31));

