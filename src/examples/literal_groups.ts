import Color = require("../models/color");
import { Group } from "../models/group";

function validGroup(group: Group) {}

// VALID    
validGroup([
    { color: Color.green, num: 1}
    , { color: Color.yellow, num: 1}
    , { color: Color.blue, num: 1}
    , { color: Color.red, num: 1}
]);    

// VALID    
validGroup([
    { color: Color.green, num: 1}
    , { color: Color.yellow, num: 1}
    , { color: Color.blue, num: 1}
]);    

// VALID    
validGroup([
    { color: Color.blue, num: 3}
    , { color: Color.red, num: 3}
    , { color: Color.green, num: 3}
]);  

// // INVALID
// validGroup([
//     { color: Color.blue, num: 1}
//     , { color: Color.red, num: 2} // All have to have the same number
//     , { color: Color.green, num: 1}
// ]);  

// // INVALID
// validGroup([
//     { color: Color.blue, num: 3 }
//     , { color: Color.red, num: 3 } 
//     , { color: Color.green, num: 4 } // All have to have the same number. Change to 3
// ]);  

// // INVALID
// validGroup([
//     { color: Color.yellow, num: 7 }
//     , { color: Color.red, num: 7 } 
//     , { color: Color.green, num: 4 } // try changing to 7
//     , { color: Color.blue, num: 7 } 
// ]);  

// // INVALID    
// validGroup([
//     { color: Color.blue, num: 1}
//     , { color: Color.blue, num: 1} // Cannot repeat a color!
//     , { color: Color.green, num: 1}
// ]);  

// // INVALID    
// validGroup([
//     { color: Color.blue, num: 1}
//     , { color: Color.yellow, num: 1}
//     , { color: Color.yellow, num: 1} // Cannot repeat a color! Try changing to red or green.
// ]);  

// // INVALID    
// validGroup([
//     { color: Color.blue, num: 1}
//     , { color: Color.yellow, num: 1}
//     , { color: Color.red, num: 1}
//     , { color: Color.blue, num: 1} // Cannot repeat a color! Try changing to green.
// ]);  
