let a=12;
let b=13;
let c=14;
var l;
var m;
var s;
if (a<b&&a<c) {
    s=a;
}
else if (b<a&&b<c) {
    s=b;
}
else {
    s=c;
}
if (a>b&&a>c) {
    l=a;
}
else if (b>a&&b>c) {
    l=b;
}
else {
    l=c;
}
m=(a+b+c)-(l+s);
console.log("ascending order "+l+" "+m+" "+s);
console.log("descending order "+s+" "+m+" "+l);