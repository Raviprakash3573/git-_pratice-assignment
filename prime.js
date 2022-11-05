function checkprime(num){
    if(num<=1){
      return 
    }
    for(let i=2;i<num;i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}
