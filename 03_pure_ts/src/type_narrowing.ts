//  type narrowing in ts

//  in operator
interface fish{
    swim:boolean,
    food:string,
}
interface bird{
    fly:boolean,
    food:string
}
function getAnimalFood(animal:fish | bird):string{
    animal
    if("swim" in animal){
        animal
        return "fish food"
    }
    animal
    return "bird food"
      
}
//  to check for instances we use instanceof
interface Time{
    time:string
}
function getInfo(curr:Date | Time){
    curr
    if(curr instanceof Date){
      curr
      return "Date"
    }
    curr
    return "time"
       
}