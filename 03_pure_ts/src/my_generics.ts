// learning generics implementation
function getIndex<type>(idx:type):type{  // this will take idx of any type and will return that same type
    return idx;
}

// using array as generics
function getSearchProducts<T>(products:T[]):T{
    // do some db operations
    const myIndex=2;
    return products[myIndex];
} 
// arrow function               we use comma to say that this is not a tag, it is generic
const getMoreSearchProducts= <T,>(products:T[]):number=>{return products.length}

// generic classes
// e.g. usecase:
function getUserDetails<T,U extends number>(user:T,id:U):string{
    // do db operations
    return ""
}
getUserDetails("gautam",1); // working fine
// getUserDetails("gt","2")   giving error

interface Database{
    connection:string,
    username:string,
    password:string
}

function getUserDBDetails<T,U extends Database>(val1:T,val2:U):object{
     return {
        val1,
        val2
     }
}

getUserDBDetails("gautam",
    {
    connection:"connection",
    username:"gautam",
    password:"12345678"
    }
);
