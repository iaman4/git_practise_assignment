let word = 'AMAN';
let count = 0;
for(let i = 0;i<word.length;i++){
  if(word[i]==word[word.length-1-i]){
    count++;
  }
}
if(count==word.length){
  console.log('Yes it is Pallindrome');
} else {
  console.log('Not a palindrome');
}