const superHeros:string[]=[]

const heroPower: number[]=[]

superHeros.push("spider-man");
// heroPower.push("100");   not allowed
heroPower.push(100);

// also can use the syntax Array<number>
const power:Array<number>=[]

type User={
   name:string,
   email:string
};

const allUsers:User[]=[]
// allUsers.push("");  not allowed

allUsers.push({name:"",email:""});

//  2d array
const MLModels: number[][]=[
    [255,255,255],
    []
]

// there is also a read only array.
const personalId: ReadonlyArray<string>=[]
// personalId.push("gautam");  not allowed -> we can't mutate values

