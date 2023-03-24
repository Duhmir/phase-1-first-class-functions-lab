// Code your solution in this file!
/*const drivers = ["Antonia", "Nuru", "Amari", "Mo"]

function returnFirstTwoDrivers(){
    return drivers.splice(0,2);
}

function returnLastTwoDrivers(){
    return drivers.splice(0)
}
*/

const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers){
    return drivers.slice(2)
}

 const selectingDrivers =  [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num1){
    return function(fare){
        return num1 * fare; 

    }
}
const fareDoubler = function (fare){
    return fare * 2
}

const fareTripler = function (fare){
    return fare * 3
}

// function selectDifferentDrivers(drivers, callback){
//     return callback(drivers)
    
// }
const selectDifferentDrivers = function (drivers, callback){
    return callback(drivers)
}