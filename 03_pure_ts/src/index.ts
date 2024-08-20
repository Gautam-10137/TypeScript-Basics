console.log("typescript is here")

class User{
    private email:string
    protected name:string
    readonly city:string=""

    constructor(email:string,name:string){
        this.email=email;
        this.name=name;
    }

    get Email():string{
        return this.email;
    }

    set Email(newEmail:string){
         this.email=newEmail;
    }
    
}
const gautam=new User("gt@email.com","gautam")
gautam.city
// gautam.city=4      can't mutate read-only var

// gautam.email    can't access private properties directly

gautam.Email   // it calls the getter 
gautam.Email="pahwa@gmail.com"    // it calls the setter function


// Inheritance
class SubUser extends User{
   changeName(newName:string):void{
       this.name=newName     // can access name , since it is protected
   }
}


