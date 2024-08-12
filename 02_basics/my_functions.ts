
function addTwo(num){

    num.toUpperCase(); // I shouldn't be allowed to do this in ts, but it is ,due to type "any" 
    return num+2;
}

addTwo(5);
addTwo("5");   //  allowed

// Solution : add implicit type to parameter

function addThree(num : number){

    // num.toUpperCase();     not allowed
    return num+3;
}
// addThree("5")    not allowed
addThree(5);

function getUpper(val : string){
    return val.toUpperCase();
}
getUpper("gautam");
// getUpper(4);   not allowed

function signUpUser(name:string,email:string,isPaid:boolean){}

signUpUser("gautam","pahwa@test.com",false);

//  providing default value to parameter
let loginUser=(name:string,email:string,isPaid:boolean=false)=>{}

loginUser("gautam","pahwa@example.com");

function addFour(num:number){
    // return num + 4
    return "hello"
}     // this will work fine & we need to work on this issue 
addFour(5);

//  solution 
// implicitly define the return  type for function
function getValue(num: number):string{
    return num.toString();
}
getValue(10);

// what if I have to return two different type value according to condition
function getResponse(num:number):string{
    //  if(num>5){
    //     return true      // by this way we can't return boolean from  function of type string 
    //  }
     return "200 OK"
}

// typescipt is smart since it is aware of the context in which code is running
const colors=["green","yellow","red","blue"]
colors.map(color=>{  // ts auto detect the  data type for color
    return `Color is: ${color}`
})

const ids=[11,22,33]
ids.map(id=>{   // it will auto detect the data type for id
    return `Id is: ${id}`
})
// defining return type for methods
ids.map((id):number=>{
    return id
})

// to define a fn that will never return a value e.g. when we use fn to define error

// function consoleError(msg: string):never{
//     console.error(msg);  // if we need to console then we have to use void.
// }
function consoleError(msg: string):void{
    console.error(msg);
}

function handleError(msg: string):never{
    throw new Error(msg);   // now we can use never , since a function returning 'never' cannot have a reachable end point
}
 


export {}
