import TileColor = require("./color");
import TileNumber = require("./tile_number");

/** A single tile. */
export type Tile<TColor extends TileColor.Set, TNumber extends TileNumber.Set> = 
    Readonly<{
        color: TColor;
        num: TNumber;
    }>;

/** Type-guard that vouches for this tile having a specific color to the type system. */
export function hasColor<TColor extends TileColor.Set, TNumber extends TileNumber.Set>(color: TColor, tile: Tile<TileColor.Set, TNumber>): tile is Tile<TColor, TNumber> {    
    return tile.color === color;
}

/** Type-guard that vouches for this tile having a specific number to the type system. */
export function hasNumber<TColor extends TileColor.Set, TNumber extends TileNumber.Set>(num: TNumber, tile: Tile<TColor, TileNumber.Set>): tile is Tile<TColor, TNumber> {
    return tile.num === num;
}
    
