import Color = require("../models/color");
import { isGroup, Group } from "../models/group";
import TileNumber = require("../models/tile_number");
import { Tile, hasColor, hasNumber } from "../models/tile";
import { isRun, Run, hasSameColor, isPredecessorOf } from "../models/run";
import { isTuple } from "../helpers/tuples";

function validRun(run: Run<TileNumber.Set>) {}
function validGroup(group: Group) {}

// arbitrary tiles came in from the outside world - we know nothing at all
let arbitraryTiles: Tile<Color.Set, TileNumber.Set>[] = [];

// // INVALID 
// validRun(arbitraryTiles);

// Preferrably, you will want to use the type guards to tame unruly data.
if (isRun(arbitraryTiles))
    // VALID - the type guard has verified that the tiles match some pattern of a Run
    validRun(arbitraryTiles);

if (isGroup(arbitraryTiles))
    // VALID - the type guard has verified that the tiles match some pattern of a Group
    validGroup(arbitraryTiles);      

// However, let's see if we can perform enough tests to prove a run to the compiler
if (isTuple(3, arbitraryTiles)) {
    // // INVALID
    // validRun(arbitraryTiles);

    const [first, second, third] = arbitraryTiles;

    if (hasNumber(3, first) && isPredecessorOf(first, second) && isPredecessorOf(second, third)) {
        // // INVALID - We have proved the numbers but not that the colors are the same.
        // validRun(arbitraryTiles);

        if (hasColor(Color.red, first) && hasSameColor(first, second) && hasSameColor(second, third)) {            
            // VALID - Exhaustive proof to the type system of a run starting 3 with color red
            validRun([first, second, third]);
        }
        if (hasColor(Color.green, first) && hasSameColor(first, second) && hasSameColor(second, third)) {            
            // VALID - Exhaustive proof to the type system of a run starting 3 with color green
            validRun([first, second, third]);
        }
        if (hasColor(Color.blue, first) && hasSameColor(first, second) && hasSameColor(second, third)) {            
            // VALID - Exhaustive proof of a run
            validRun([first, second, third]);
        }
        if (hasColor(Color.yellow, first) && hasSameColor(first, second) && hasSameColor(second, third)) {            
            // VALID - Exhaustive proof of a run
            validRun([first, second, third]);
        }
    }        
}
