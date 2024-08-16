// interface is used to declare must implement feature and not to define it 
// gives freedom to instances to define internal implementation with customization acc. to them 

interface User{
    readonly dbId:number, //  to define readonly fields
    name:string,
    id:number,
    phone?:number, // this is an optional attribute for instances
    startTrail:()=>string , // to define a function along with return type 
    // also we can define a method as
    getCoupon(couponNumber: string,value:number):number
}

//  Reopening of the interface is allowed
interface User{
    githubId:string     // it will be added to previous User interface 
}
// here we must define only the properties defined in User
const user1:User={name:"gt",id:29,
    dbId:4233,
    githubId:"2002",
    startTrail:()=>("gt"),
    //  we can give any name to parameter as per our wish
    getCoupon: (name:"gautam123",off:10)=>{
        return 10
    }
}


const user2:User={name:"gt",id:25,phone:8689014713,
    dbId:2445,
    githubId:"2002",
    startTrail:()=>{ return "trail started" },
    getCoupon: ()=>{
        return 20
    }
};

user2.name="gautam"
// user2.dbId=3244    not allowed to mutate readonly fields

// inheritance in interface
interface Admin extends User{
    role:"admin"| "ta" | "learner"
}

const user3:Admin={
    dbId:12,
    role:"admin",
    name:"gt",
    id:29,
    startTrail:()=>("user 3"),
    getCoupon:(name:"course",off=20)=>off,
    githubId:"203"
}




