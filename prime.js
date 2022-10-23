let x = 15;
let sum = 0;
for(let i = 2;i<=x;i++){
  if(x%i==0){
    sum++;
  }
}
if(sum==1){
  console.log('Yes the number is prime');
} else {
  console.log('No the number is not prime');
}