import Color = require("../models/color");
import TileNumber = require("../models/tile_number");
import { Run } from "../models/run";

function validRun(run: Run<TileNumber.Set>) {}

// VALID    
validRun([
    { color: Color.green, num: 1 }
    , { color: Color.green, num: 2 }
    , { color: Color.green, num: 3 }
]);

// VALID    
validRun([
    { color: Color.yellow, num: 3 }
    , { color: Color.yellow, num: 4 }
    , { color: Color.yellow, num: 5 }
    , { color: Color.yellow, num: 6 }
]);

// VALID    
validRun([
    { color: Color.blue, num: 8 }
    , { color: Color.blue, num: 9 }
    , { color: Color.blue, num: 10 }
    , { color: Color.blue, num: 11 }
    , { color: Color.blue, num: 12 }
]);

// VALID    
validRun([
    { color: Color.red, num: 5 }
    , { color: Color.red, num: 6 }
    , { color: Color.red, num: 7 }
    , { color: Color.red, num: 8 }
    , { color: Color.red, num: 9 }
    , { color: Color.red, num: 10 }
]);

// VALID    
validRun([
    { color: Color.yellow, num: 5 }
    , { color: Color.yellow, num: 6 }
    , { color: Color.yellow, num: 7 }
    , { color: Color.yellow, num: 8 }
    , { color: Color.yellow, num: 9 }
    , { color: Color.yellow, num: 10 }
    , { color: Color.yellow, num: 11 }
]);

// // INVALID    
// validRun([
//     { color: Color.red, num: 5 }
//     , { color: Color.red, num: 6 }
//     , { color: Color.red, num: 8 } // Invalid, must be contiguous!
//     , { color: Color.red, num: 9 }
//     , { color: Color.red, num: 10 }
// ]);

// // INVALID    
// validRun([
//     { color: Color.yellow, num: 6 } // WRONG ORDER
//     , { color: Color.yellow, num: 5 }
//     , { color: Color.yellow, num: 4 }
//     , { color: Color.yellow, num: 3 }        
// ]);

// // INVALID
// validRun([
//     { color: Color.green, num: 1 }  
//     , { color: Color.green, num: 3 } 
//     , { color: Color.green, num: 3 } 
// ]);
