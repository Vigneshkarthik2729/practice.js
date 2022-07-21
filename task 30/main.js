var r=0,a,num;
num=153;

temp=num;
console.log(temp)
while(temp>0)
{
    a=temp%10;
    r=r+(a*a*a);
    temp=Math.floor(temp/10);
}
console.log(temp)
if (r==num) {
    console.log("Amstrong number");
}
else
{
    console.log("Not Amstrong number");
}