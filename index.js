console.log("Hello World");
const myObj = { fruit: "apple", drink: "water", dessert: "cookie" };

//print our all keys and values in the object, using Object.keys

let eachKey = Object.keys(myObj);
 for (let i = 0; i < eachKey.length; i++ ) {
     console.log(eachKey[i]);
     console.log(myObj[eachKey[i]]);
 }
 console.log(eachKey);
 