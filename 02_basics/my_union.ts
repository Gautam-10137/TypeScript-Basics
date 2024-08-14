// we can define more that two type for a single entity e.g. for variable,array,....
let score:number | string=33
score=44  
score="55" // can mutate also with string

// assume a situation where we first have a user and then we have to make it admin, then its type will change 
// and we want to change detail in that instance, not to make a new instance. 
type User={
    name:string,
    id:number
}

type Admin={
    username:string,
    id:number
}

let gautam:User={name:"Gautam",id:2529}

// gautam={username:"gt",id:2529};    can't define in this way
// solution : we have to define user instance as union type

let newUser:User | Admin={name:"Gautam",id:29}
newUser={username:"gt",id:29}   // now we can update instance

// sometimes we have a situation where function have to take multiple type values or have to return multiple type values
function getDbId(id:number | string){
    // making some api calls
    console.log(`DB Id is: `+id);
}
getDbId(29)
getDbId("29")  // both types are allowed 

// Note if we defined parameter of function as union then we can't directly apply operations of a particular data type
function getUserId(id:number | string){

    // id.toUpperCase()   this will not work directly , since id is no only a type of string ,since its actuall type is still unknown
    if(typeof id==="string"){
        // now it is cleared that id is string , can perform string operations
        id.toLowerCase()
    }  
} 

// array
const data:number[]=[1,2,3]
const data2:string[]=["1","2","3"]
// these are ok, but what if we have to take their mixed type for number and string

const data3:number[] | string[]=["1","2","3"]  // it say we can either store whole string array or whole number array.

// This is how we will stor mixed type
const data4:(number | string )[]=[1,"2",3,"4"]

// we also could do with any , but it is not standard way
const data5:any[]=[1,"2",true]

// :-> OUR MAIN GOAL OF TS IS TO MAKE IT STRICT AS MUCH AS POSSIBLE


// We also can make a variable as more strict

let pi=3.14
pi=3.145  // here we can mutate it 
// soln
let pi2:3.14=3.14
// pi2=3.145    not allowed

// we also can fix more that one value for a variable
let seatAllotement:"aisle" | "middle" | "window";
seatAllotement="aisle"

// seatAllotement="crew"     :-> not allowed

export {}