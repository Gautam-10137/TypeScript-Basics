// say we have to store some data which is in fixed format, then currently how we can do it:
const myUser:(number | string)[]=[1,"gautam"]
//  but problem is that this is not a strict way to store this info.
//  Here comes the need of tuple , to define which type and how many type of data will be needed

const user:[number,string]=[1,"gautam"]  // now this is perfect

const loginInfo:[number,string,boolean]=[1,"gautam",true]

type User=[number,string]

const newUser:User=[29,"gt"]
newUser[1]="gautam"  // can update value
// newUser[1]=true     it is not allowed

// newUser.push(true)      :-> not allowed