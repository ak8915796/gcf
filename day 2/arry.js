// aary
let arr = [1,2,3,'apple',"true", null, undefined]
console.log(arr);


let arr1 = new Array(1,2,3,4,5,6);
console.log(arr1);

let fruits = ["orange","apple","cherry"];
fruits[0] = "mango";
console.log(fruits);
console.log(fruits[3]);
console.log(fruits[2]);
console.log(typeof fruits);
console.log(fruits.length);

let arr3 = [1,2,3,4,5];
arr3.push("parul");
console.log(arr3);

arr3.pop();
console.log(arr3);

arr3.unshift("XYZxagasg");
console.log(arr3);

arr3.shift();
console.log(arr3);

// slice

let arr4 = [1,2,3,4,5];
arr4.splice(2,2);
console.log(arr4);

arr4.splice(2,0,"Amrit","Bihar");
console.log(arr4);

let arr5 = [1,2,3,4,5];
let newArr5 = arr5.slice(2,4);
console.log(newArr5);


let arr6 = [1,2,3];
let arr7 = [4,5,6];
let newArr6 = arr6.concat(arr7);
console.log(newArr6);

let arr8 = ["banana","apple","cherry"];
arr8.sort();
console.log(arr8);     

let arr10 = [5,2,8,1,9];
arr10.sort((a,b) => a - b);
console.log(arr10);

arr10.sort((a,b) => b - a);
console.log(arr10);

let arr9 = [1,2,3,4,5];
arr9.reverse();
console.log(arr9);

let arr11 = [1,2,3,4,5];
let index = arr11.indexOf(3);
console.log(index);

let arr12 = [23,45,76,89,12];
for(let i=0; i <arr12.length;i++){
    console.log(arr12[i]);
}


//----------day3------------//
