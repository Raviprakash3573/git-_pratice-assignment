function palindrome(str){
    let rev="";
    for(let i=str.length-1;i>=0;i--){
      rev+=str[i];
    }
    return rev == str;
  }
  let input = "suman";
  let ans = palindrome(input);
  ans?console.log(input,": palindrome"):console.log(input,": Not palindrome");