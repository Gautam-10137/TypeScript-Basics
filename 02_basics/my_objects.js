var User = {
    name: "Gautam",
    email: "pahagautam786@gmail.com",
    isActive: true
};
function createUser(user) { } // this is correct way of defining an object as parameter
createUser({ name: "", isActive: false });
// createUser({name:"",isActive:true,email:"gt@test.com"})   This way of adding extra value will give error
// Solution
var newUser = { name: "Gautam", isActive: true, email: "gt@test.com" };
createUser(newUser); // this way we can pass much more info.
function createCourse() {
    return { name: "react", price: 399 };
}
createCourse();
// say if there are 8 n. of functions that are using this same type of data as userInfo ,now we can easily code it.
function createNewUser(user) {
    return { name: "", email: "", isPaid: true };
}
createNewUser({ name: "", email: "", isPaid: true });
var myUser = {
    _id: "A01",
    name: "Gautam",
    email: "gt@test.com",
    isActive: true,
    credCardDetails: "cd01csd344"
};
myUser.name = "Pahwa";
// myUser._id="B02"   not allowed since _id is read only
var myUser2 = {
    _id: "B02",
    name: "Gt",
    email: "gt@test.com",
    isActive: false
};
myUser2.email = "gt@example.com";
