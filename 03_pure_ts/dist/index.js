"use strict";
console.log("typescript is here");
class User {
    
    constructor(email, name) {
        this.city = "";
        this.email = email;
        this.name = name;
    }
}
const gautam = new User("gt@email.com", "gautam");
gautam.city = "hisar";
// gautam.city=4
