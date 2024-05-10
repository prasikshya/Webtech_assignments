
//swap
let a=10;
let b=20;
function swap(a,b){
    console.log(`Before swapping a=${a},b=${b}`)
    let temp=a;
    a=b;
    b=temp;
    console.log(`After swapping:a=${a},b=${b}`)
    return [a,b];

}
swap(a,b);