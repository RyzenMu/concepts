 // primitive data type 

 let x = 10;

 y = x;

 x = 20;

 console.log(x);
 console.log(y);


 // reference data type

 let x1 = {value : 10};

 let y1 = x1;

x1.value = 20;

 console.log(x1.value);
 console.log(y1.value);

 let x2 = [10];

 let y2 = x2;

 x2[0] = 20;

 console.log(x2[0]);
 console.log(y2[0]);


 // example 

 let cartObj = {value : 5};

console.log(cartObj);

 function addCart(cart){
    cart.value++;
 }

addCart(cartObj);

 console.log(cartObj);

 // Enumerating properties

 const user = {
    name : 'Anbu',
    getName(){
        console.log(`my name is ${this.name}`);
    }
 }


 console.log(user.name);

 user.getName();


 for (let key in user){
    console.log(key);
 }


 // iterating objects using for of loop


 for (let key of Object.keys(user)){
    console.log(key);
 };


 for (let key of Object.keys(user)){
    console.log(user[key]);
 };

 for (let value of Object.values(user)){
    console.log(value);
 };


 for (let entre of Object.entries(user)){
    console.log(entre);
 }


//  console.log(name instanceof(Object.keys(user)));

 if ('name' in user){
    console.log(true);
 }




// cloning of objects

const table = {
    name : 'plastic',
    legs(){
        console.log(`the ${this.name}table has 4 legs`);
    }
};


const another = {};

for (let key in table){
    another[key] = table[key];
}


console.log(another);



const cable = Object.assign({color: 'brown'}, table);

console.log(cable);


//spread operator

const method3 = {... cable};

console.log(method3);

// inbuilt methods

console.log(Math.abs(-3));

console.log(Math.ceil(-2.5));

console.log(Math.floor(-2.5));

console.log(Math.round(1.3));


let marks = [45, 77, 96, 92, 85, 25];

console.log(Math.max(...marks));
console.log(Math.min(...marks));



// primitive strings

let firstName = "Anbuchezhiyan";

console.log(firstName.length);

console.log(firstName.charAt(4));

let secondName = "ezhilarasu";

console.log(firstName.concat( '  ', secondName));

console.log(firstName.includes('chf'));

console.log(firstName.startsWith('a'));

console.log(firstName.startsWith('A'));

console.log(firstName.endsWith('n'));

console.log(firstName.endsWith('a'));

// index of determines the index of a character

console.log(firstName.indexOf('c'));

console.log(firstName.indexOf('z'));

console.log(firstName.indexOf('y'));

console.log(firstName.indexOf('x'));

console.log(firstName.repeat(4));

console.log(firstName.replace("Anbu", "Rocky"));

let para = "Some text";

console.log(para.split(' ', 2));

let message = "       some sentence      ";

console.log(message.trim());






































































