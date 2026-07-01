//singleton
//Object.create

// object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "kv",
    "full name": "kavya",
    [mySym]: "mykey1",
    age: 21,
    location: "bhopal",
    email: "kv@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"])
console.log(JsUser["full name"])
//console.log(typeOf JsUser.mySym) 
console.log(JsUser[mySym])

JsUser.email = "kvjain@go.com"
//Object.freeze(JsUser)

JsUser.greeting = function(){
    console.log("hello kv");
}
JsUser.greetingTwo = function(){
    console.log('hello kv,${this.name}');
}
//console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
