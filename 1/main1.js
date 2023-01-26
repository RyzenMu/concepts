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

console.log("Spread Operator", maggi1);


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
   { id : 3, title : "Head Phone", cost : "2500"},
   { id : 4, title : "Basket", cost : "12500"},

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

let sortByTitle = itemsA.sort(function(a, b){
   return (a.title < b.title);
});

console.log("Sort By title", sortByTitle);

let sortByTitleIf = itemsA.sort(function(a, b){
   if(a.title < b.title) return -1;
   if(a.title > b.title) return 1;
   return 0;
   });

console.log("Sorted using if statement", sortByTitleIf);

// filter products less than 8000

let proLessThan8000 = itemsA.filter(function(value, index, array){
   return value.cost < 8000;
});

console.log("products less than 8000", proLessThan8000);

// map it like this // android phone - 7500;

let proMapping = itemsA.map(function(value, index, array){
   // console.log(`${value.title.toUpperCase()} - ${value.cost}`);
   let title = value.title.toUpperCase();
   let cost = value.cost;
   let obj = {title : title, cost : cost};
   return obj;
});

console.log("Mapped results is  ", proMapping);



// video - 67, array reduce

const donations = [45, 78, 95, 65, 4851, 1000];

let total = donations.reduce(function(a, b){
   // return a+b;
   console.log(a);
   console.log(b);
   console.log('-------------');
   return a+b;

});

console.log(total);

const shoppingCart = [
   {id:1, item: "Organic Milk", cost:45},
   {id:2, item: "Bread", cost:20},
   {id:3, item: "Maagi", cost:12},
];

let totalCost = shoppingCart.reduce(function(a, b){
   return a+b.cost;
}, 0);

console.log("the total cost is :" , totalCost);

let totalCostReduceRight = shoppingCart.reduceRight(function(a, b){
   console.log(a);
   return a+b.cost;
}, 0);

console.log(totalCostReduceRight);


// video 68 - diffrence between array methods

{
   // sort()
   let numbers = [2, 6, 1, 5, 7, 4, 3, 11];
   numbers.sort((a, b) => a-b);
   console.log(numbers);


   numbers.sort((a, b) => b-a);
   console.log(numbers);
}

{
   // find
   let numbers = [2, 7, 6, 2, 4, 3, 1, 6];
   let findInde = numbers.find(function(value, index, array){
      return value > 4;
   });

   console.log(findInde);

}


// video 71 - Functions in depth

{
   let no1 = 45;
   let no2 = 4218;
   const addNo = function addNo(){
      let tot = no1 + no2;
      console.log(tot);
   }
   addNo();
}

{
   // anonymous function
   let no1 = 45431;
   let no2 = 58724;
   let add = function(){
      let tot = no1+no2;
      return tot;
   };
   console.log(add());
}

{
   // let n1 = 45431;
   // let n2 = 58724;
   // const addNo = new Function("console.log(n1+n2)");
   // addNo();
}


// video 72 - function hoisting

{
   print();

   function print(){
      console.log("today is tuesday");
   }
}


{
   // print();
   

   let print = function print(){
      console.log("Todays date is january 24");
   };

   print();
}


// vcideo - 73 immediatedly invoking function IIFE

{
   let n1 = 5;
   let n2 = 4;
   
   (function sum(num1, num2){
      let tot = num1 + num2;
      console.log(tot);
   })(n1, n2);
}

{
   (function d(){
      let n1 = 16;
      (function dis(p1) {
         for (let i = 0; i <= p1; i++ ){
            console.log(i);
         }
      })(n1);

   })();
}

// video 74 - function arguments

let tiffen = 65;
let lunch = 250;
let petrol = 99;

function sumEx(tiffen, lunch, petrol){
   let result = tiffen+lunch+petrol;
   console.log(arguments);
   let total = 0;
   for (let val of arguments){
      total += val;
   };
   console.log(total);
   console.log(`your total expense is : ${result}`);
   return result;
};

let result = sumEx(12, 55, 24, 45, 782, 82) + 100;

console.log(result);


function sum(){
   let result = 0;
   for (let val of arguments){
      result += val;
   };
   console.log(result);
   console.log(arguments[4]);
   console.log(arguments);
};

sum(12, 34, 56, 78, 20, 300);

{
   let array = [1, 4, 9, 5];
   console.log(array);
}



{
   let obj = {
      id : 5,
      name : "mmm",
      date : "01/24/2023"
   };
   console.log(obj);
}




// video 75 - rest operator

{
   function sumExpenses(loan, ...expenses){
      console.log(expenses);
      let t = expenses.reduce((a, b)=> {
         return a + b;
      });
      console.log(t - loan);
   };
   let result = sumExpenses(100, 45, 38, 691, 81, 145);
   console.log(result);
   // result();
}



{
   // video 76 - function default parameters

   function calTax(cost, titile, tax = 18,){
      tax = tax ?? 18;
      taxAmount = cost * tax / 100;
      console.log(`\n\ntaoal cost is ${cost} \n\n GST : ${tax}% is : ${taxAmount} \n \n Total MAount is ${cost+taxAmount}`);
   }

   calTax(45, 18);
   calTax(55, 25);
   calTax(88, "ship");
}


{
   // video 77 - getters and setters

   let student = {
      firstName : " Anbu",
      lastName : "Selavan",
      get fullName (){
          console.log(student.firstName +" "+ student.lastName);
      },
      set fullName(value){
         let values = value.split(" ");
         console.log(values);
         this.firstName = values[0];
         this.lastName = values[1] ?? " ";
      }
   };
   student.fullName;   // getters 

   // setters 

   student.fullName = "TrishaKrishnan";

   student.fullName;

}

{
   // video -78 - error handling
   // try and catch
   let student = {
      firstName : " Anbu",
      lastName : "Selavan",
      get fullName (){
          console.log(student.firstName +" "+ student.lastName);
      },
      set fullName(value){
         if (typeof value != "string"){
            const err = new Error(" It is not a string.....");
            console.log(err);
            throw err;
         } 
         if (value.length <= 3) throw new Error("Name Invalid");
         let values = value.split(" ");
         console.log(values);
         this.firstName = values[0];
         this.lastName = values[1] ?? " ";
      }
   };
   student.fullName;   // getters 

   // setters 

   student.fullName = "TrishaKrishnan";

   student.fullName;

   try {
      student.fullName = 45;
   }catch(ex){
      console.log(ex);
   }

   student.fullName;

   try {
      student.fullName = "Tha";
   }catch(ex){
      console.log(ex);
   }

   student.fullName;

  
}

{
   // video 79 - javascript scopes

   let message = " Hello World ";

   {
   let message = " Hello World ";
   console.log(message);
   }

   

   {
   let message = ".......HH";
   console.log(message);
   }


   function greetUser(){
      let message = " Good Morning ";
      console.log(message);
      if(true){
         let name = "Anbu";
         console.log(name);
      }
   }

   greetUser();

   for(let i=0; i <= 10; i++){
      console.log(message + " "+ i);
   }

   // console.log(i);

   function log(message){
      console.log(message);
   }

   log(message)

   // for(let i= 0; i< 250; i++){
   //    console.log(i);
   // }

}


{
   //video - 81 "this" keyword

   const channel = {
      title : "Cyberdude",
      videoTitle : "Javascript",
      languages : ['tamil', 'malayalam', 'telugu'],
      subscribe(){
         console.log(this);
      },
      showVideos(){
         // console.log(this.languages);
         this.languages.forEach(function(lang){
            console.log(this.video, lang);
         }, {video : "JS"})
      },
      showVideos1(){
         // console.log(this.languages);
         this.languages.forEach(function(lang){
            console.log(this.videoTitle, lang);
         }, this)
      }
   };
   channel.subscribe();

   function Share(channel_title){
      this.channel_title = channel_title;
      console.log(this);
   };

   const ShareVideo = new Share("Cyber Dude");

   channel.showVideos();
   channel.showVideos1();




};

{
   // video - 82 , good practices this

   const channel = {
      title : "Cyberdude",
      videoTitle : "Javascript",
      languages : ['tamil', 'malayalam', 'telugu'],
      subscribe(){
         console.log(this);
      },
      showVideos(){
         // console.log(this.languages);
         let that = this;
         this.languages.forEach(function(lang){
            console.log(this.video, lang);
         }, {video : "JS"})
      },
      showVideos1(){
         // console.log(this.languages);
         let that = this;
         this.languages.forEach(function(lang){
            console.log(that.videoTitle, lang);
         })
         
      },
      showVideos2(){
         // console.log(this.languages);
         // let that = this;
         this.languages.forEach(function(lang){
            console.log(this.videoTitle, lang);
         }.bind(this));
   }

}

   channel.showVideos();
   channel.showVideos1();
   channel.showVideos2();


   function playVideo(title){
      console.log(title);
      console.log(this);
   }

   playVideo();
   playVideo.call({videoTitle: "JSCR"}, "JS");
   playVideo();

   playVideo.apply({videoTitle: "JSAPPLY"}, ["OOP JS", "JCRR"]);


   let newL = playVideo.bind({videoTitle:"JS BIND"});

   console.log(newL());




}

























