let array = ['a', 'y', 'b', 'c', 's'];

array.splice(2, 0, 'e', 2, 'y');

console.log(array);

array.shift();

console.log(array);

// finding an element

console.log(array.indexOf('y'));

// console.log(array.find(array, 'y'));

console.log(array.lastIndexOf('y') !== -1); 

console.log(array.includes('e'));


const orders = [
   { id : 1, item : "smartphones", quantiy : 1},
   { id : 2, item : "Maggi", quantiy : 3},

]

 console.log(orders.includes({ id : 1, item : "smartphones", quantiy : 1}));

 console.log(orders.find(function(order){
   return order.item === "Maggi";
 }));


 console.log(orders.findIndex(function(order){
   return order.item === "Maggi";
 }));

 // video 53

 // FAT ARROW FUNCTIONS

 console.log(orders.find((order) => {
   return order.item === 'Maggi';
 }));


 // video 54 - remove an element

 const num = [1, 2, 3, 4];

 num.push(5);

 console.log(num);

 num.pop();

 console.log(num);

num.shift();

 console.log(num);

num.splice(0, 2);

 console.log(num);

// video -55, empty an array

const nums = [1, 2, 3, 4];

// way 1

// nums = [];

console.log(nums);

let nums1 = [1, 2, 3, 4];

// way 1

nums1 = [];

console.log(nums1);

// way 2

nums1 = [1, 2, 3, 4];


console.log(nums1.length);

nums1.length = 0;

console.log(nums1.length);

// way 3


nums1 = [1, 2, 3, 4];

nums1.splice(0, nums1.length);

console.log(nums1.length);


// way 4
nums1 = [1, 2, 3, 4];


while (nums1.length){
   nums1.pop();
}

console.log(nums1.length);


// video 56 combining arrays

const shopping_cart = ["Maggi", "Beans", "Masala"];

const additional_cart = ["matchbox", "salt"];

let maggi = shopping_cart.concat(additional_cart);

console.log(shopping_cart);

console.log(maggi);


// extract using slice

let mag = maggi.slice(1, 3);

console.log(mag);

// video 57 - spread  ... operator

let maggi1 = [...shopping_cart, 45, {name : "muruga"}, ...additional_cart]

console.log(maggi1);


// video 58 - iterating arrays

const dailyRoutine = ["wake up", "eat", "sleep"];

// for of

for (let item of dailyRoutine){
   console.log(item);
}

for (let item in dailyRoutine){
   console.log(item);
   console.log(dailyRoutine[item]);
}

// for each

dailyRoutine.forEach(function(i, ind) {
   console.log(i, ind);
})

// for each with fat arrow

dailyRoutine.forEach((i, ind) => {
   console.log(ind, i);
});


// video - 59 - joining and splitting

let joined = dailyRoutine.join(",   ");

console.log(joined);

let fullName = "Anbu selvan is a good man" ;

let splittedName = fullName.split(" ");

console.log(splittedName);

let joi = splittedName.join(" ");

console.log(joi.toLowerCase());



// video 60 - sorting an array


const students = [3, 8, 1];

students.sort();

console.log(students);

students.sort(function(a, b){
   return b - a;
});

console.log(students);

students.reverse();

console.log(students);


const stud = [
   {id :3, name : "senthil"},
   {id :8, name : "Guna"},
   {id :1, name : "anbu"},

]

stud.sort(function(a, b){

   nameA = a.name.toLowerCase;
   nameB = b.name.toLowerCase;
   if (nameA < nameB) return -1;

   if (nameA > nameB) return 1;

   return 0;

});

console.log(stud);


stud.sort(function(a,b){
   if (a.id < b.id) return -1;
   if (a.id > b.id) return 1;
   return 0;
});

console.log(stud);