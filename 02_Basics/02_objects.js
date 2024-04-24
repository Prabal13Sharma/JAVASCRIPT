//singleton when object are created using constructor


//Object Literals

const mysym = Symbol("key1")

const Jsuser ={
    name:"Prabal",
    "full name":"Prabal Sharma", // it will treat name as "name"
    age: 23,
    //mysym:"my key1",
    [mysym]:"my key1", // now it will be symbol unlike upper one which was a string
    email:"prabalsharma1231@gmail.com"
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser[mysym]);//not["mysym"] if u r using it as a symbol only

Jsuser.greeting= function () {
    console.log("Hello JS User");
}
Jsuser.greetingtwo=function(){
    console.log(`Hello Js User, ${this["full name"]}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());