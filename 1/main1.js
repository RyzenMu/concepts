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

// video 61 - testing an array

//allow only adults

const queue_by_age = [24, 32, 45, 1];

let isAllowed = queue_by_age.every(function(value, index, array){
   // console.log("value", value);
   // console.log("index", index);
   // console.log("array", array);

   return value >= 18;
});

console.log("isAllowed", isAllowed);

// queue_by_age = [1, 2, 3];

let isAllowedSome = queue_by_age.some(function(value, index, array){
   return value >=18;
});

console.log('isAllowedSome', isAllowedSome);

const numbers = [1, 2, 3, 4, 5];

let isEven = numbers.every(function(value, index, array){
   return value%2 ==0;
});

console.log("is even", isEven);


let isEven1 = numbers.some(function(value, index, array){
   return value%2 ==0;
});

console.log("is even some", isEven1);



//video - 62 - testing objects in array

const items = [
   {id: 1, names: "MObiles", isDeliverable : true },
   {id: 2, names: "Asseories", isDeliverable : true },
   {id: 3, names: " T V", isDeliverable : false },
];

let isDeliverable = items.every(function(value, index, array){
   return value.isDeliverable;
});

console.log("Deliverable :", isDeliverable);

let notDeliverable = items.some(function(value, index, array){
   return value.isDeliverable == true;
});

console.log("Not Deliverable :", notDeliverable);



// video 63 -- filtering an array

const q_by_age = [24, 32, 45, 16];

let adults = q_by_age.filter(function(value, index, array){
   return value >= 18;
});

console.log("adults", adults);

const numb = [1, 2, 3, 4, 5];

let eve = numb.filter(function(value, index, array){
   return value%2 == 0;
})

console.log("even numbers", eve);

let odd = numb.filter(function(value, index, array){
   return value%2 !== 0;
})

console.log("odd numbers", odd);

const cart_items = [
   {id : 1, items: 'Android mobile', cost: "6500"},
   {id : 2, items: 'iphone mobile', cost: "27000"},
   {id : 1, items: 'Windows mobile', cost: "8500"},
];

let low_item = cart_items.filter(function(value, index, array){
   return value.cost < 10000;
});

console.log("Affordable phones", low_item);




// video 64 - finding a javascript array

let low_item_find = cart_items.find(function(value, index, array){
   return value.cost < 10000;
});

console.log("Affordable phones find first occurence", low_item_find);

let low_item_findIndexOf = cart_items.findIndex(function(value, index, array){
   return value.cost < 10000;
});

console.log(" Affordable phone find index of ", low_item_findIndexOf);


// video 65 - Array MAp

const bumbers = [1, 2, 3, 4, 5];

let bumbersMapped = bumbers.map(function(value, index, array){
   return value * 3;
});

console.log("Mapped Bumpers", bumbersMapped);

const peoples = [
   {id : 1, first_name : "Ajith", last_name : "Kumar"},
   {id : 2, first_name : "Anbu", last_name : "Selvan"},
   {id : 3, first_name : "trisha", last_name : "grace"},
];

let fullNamee= peoples.map(function(value, index, array){
   let fullName = [value.first_name, value.last_name].join(" ");
   let obj = {id : value.id, fullName : fullName};
   return obj;
});

console.log(fullNamee);

// let final = 

/* sort
every, some,
filter,
map,
*/

// video 66, chaining methods

let itemsA = [
   { id : 1, title : "Android Phone", cost : "7500"},
   { id : 2, title : "Gaming Computer", cost : "90500"},
   { id : 1, title : "Head Phone", cost : "2500"},
];

// sort it using lowest price

let sortedLow = itemsA.sort(function(a, b){
   let costA = parseInt(a.cost);
   let costb = parseInt(b.cost);
   return costA - costb; // ascending
   // return costb - costA; // ascending


});

console.log(" sorted items A", sortedLow);

// sort it by title ascending

// filter products less than 8000

// map it like this // android phone - 7500;










