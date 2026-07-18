// Arrays
// forEach
var arr = [1, 2, 3, 4];
arr.forEach(function(val){   // Har ek element m addition krta h
    console.log(val + " hello")
})
// Map
var arr = [ 2 , 7 , 15 , 19 , 45 , 87];
var res = arr.map(function(val){    // map ek blank arr banata hai same size of the original
    return val + 13;   // aur ye value add hoti h uss Khali arr mein
    return val + " map"
    return  val + true    // +1 hojata h har value m
})
console.log(res);
// Use of map() ---> Ek diye hue arr se aap ek aur arr create krna chahte ho

// Filter --> jab new arr original se chhhota bnana ho ya same size that's when we use filter
arr = [2, 3 , 8 , 9];
var ans = arr.filter(function(val){
    if(val >= 3) return true;
})
console.log(ans);

//find
var ans = arr.find(function(val){
    if(val === 8) return val;
})
console.log(ans);

//indexOf
var ans = arr.indexOf(8)
console.log(ans);

// Objects ---> Key Value pair

var obj = {
    name : "Vaibhav",
    age : 19 // right side always value hogi 
}
Object.freeze(obj);  // iske baad obj wali values change nhi hogi
console.log(obj.age)

// Function return
function chai(a ,b ,c){
    return 12;
}
console.log(chai.length);
console.log(chai());

// Async JS coding
//  line by line code then vo synchronus hota hai
// jo code async nature ka ho usse side stack me bhejdo & agle code ko chalao jo bhi sync nature ka ho , jab bhi saara sync code chl jaaye(main stack khali hojaye) tab check kro ki async code complete hua ya nhi & agr complete hua h toh usse main stack m lao and chala do

async function abcd(){
    let blob = await fetch(`https://randomuser.me/api/`)
    let ans = await blob.json();
    console.log(ans);
} 
abcd();



