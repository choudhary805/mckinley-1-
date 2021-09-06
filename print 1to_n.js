function printNumbers(n){
var result = n <= 1 ? '1' : printNumbers(n-1) + n;
console.log(n);
}