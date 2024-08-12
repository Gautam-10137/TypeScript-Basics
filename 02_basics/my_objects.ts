const User={
    name:"Gautam",
    email:"pahagautam786@gmail.com",
    isActive:true
};

function createUser(user:{name: string,isActive:boolean}){}  // this is correct way of defining an object as parameter

createUser({name:"",isActive:false});
// createUser({name:"",isActive:true,email:"gt@test.com"})   This way of adding extra value will give error
// Solution
const newUser={name:"Gautam",isActive:true,email:"gt@test.com"};
createUser(newUser);   // this way we can pass much more info.

function createCourse():{name:string,price:number}{
    return {name:"react",price:399}
}
createCourse()

// Say in real world scenario we have to use same info in multiple function then we have to write
// that much of info again and again in every function , so to avoid it we can define a custom data type having group of 
// values . 
type UserInfo={
     name:string;
     email:string;
     isPaid:boolean;
}

// say if there are 8 n. of functions that are using this same type of data as userInfo ,now we can easily code it.
function createNewUser(user:UserInfo):UserInfo{
    return {name:"",email:"",isPaid:true};
}
createNewUser({name:"",email:"",isPaid:true});
