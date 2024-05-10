//swap without temp
let a=10;
b=20;
function swap(a,b){
    b=a+b;
    a=b-a;
    b=b-a;
    console.log(`after swap:a=${a},b=${b}`);
    return [a,b];
}
swap(a,b);