//Enums are used when we have to restrict the number of choices for users e.g.in delievery option as "shipped" "dispatched" "deleivered"
// currently we can restrict choices as
// const AISLE=0
// const MIDDLE=1
// const WINDOW=2
// if(seat==0){
//     // AISLE seat
// }
//  These are not a standard way and lack strictness
//  Here comes the ENUM
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "Aisle";
    SeatChoice[SeatChoice["MIDDLE"] = 3] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 4] = "WINDOW"; // WINDOW will auto take the value 4
})(SeatChoice || (SeatChoice = {}));
var mySeat = SeatChoice.AISLE;
