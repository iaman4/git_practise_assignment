let x = 13;
let sum = 0;
for(let i = 2;i<=x;i++){
  if(x%i==0){
    sum++;
  }
}
if(sum==1){
  console.log('is a prime number');
} else {
  console.log(' is not a primenumber');
}