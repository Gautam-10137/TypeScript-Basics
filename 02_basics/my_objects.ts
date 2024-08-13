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

// say if we have to make an attribute as readOnly e.g. _id of user as in mongodb
// and also we want to make an attribute as optional
type Person={
    readonly _id:string,
    name:string,
    email:string,
    isActive: boolean,
    credCardDetails?:string  // this ? will make this attribute as optional e.g. for person that donot have credit card
}

let myUser:Person={
    _id:"A01",
    name:"Gautam",
    email:"gt@test.com",
    isActive:true,
    credCardDetails:"cd01csd344"
};
myUser.name="Pahwa"
// myUser._id="B02"   not allowed since _id is read only


let myUser2:Person={
    _id:"B02",
    name:"Gt",
    email:"gt@test.com",
    isActive:false
}
myUser2.email="gt@example.com"
// Note: In js there is nothing that will tell me that _id is read only

// we can also use existing type to define a new type with combination of existing type

type cardNumber={
    cardNumber:string
}
type cardDate={
    cardDate:string
}
// now we forgot add cvv, but we can combine it with existing type
type cardDetails= cardNumber & cardDate & {
    cvv: number
};
const card:cardDetails={cardNumber:"ceg42444",cardDate:"24Aug2024",cvv:345};




export {}
