 num=323;
 sum=0;
 rem=0;
 while (num!=0) {
    rem=num%10;
    sum=sum+rem;
    num=(num-rem)/10;
 }
 console.log(sum)