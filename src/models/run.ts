import TileColor = require("./color");
import TileNumber = require("./tile_number");

import { Tile } from "./tile";

/**
 * Type guard: Checks if the first is the predecessor of the second and if so narrows the type of the _second_ tile to have a number that is the successor of the first.
 */
export function isPredecessorOf<TFirst extends TileNumber.Set>(first: Tile<TileColor.Set, TFirst>, second: Tile<TileColor.Set, TileNumber.Set>): second is Tile<TileColor.Set, TileNumber.Successor<TFirst>> {
    return TileNumber.isPredecessorOf(first.num, second.num);
}

/**
 * Type guard: Checks if the first and second have the same color and if so narrows the type of the _second_ tile to have the same color as the first.
 */
export function hasSameColor<TFirstColor extends TileColor.Set, TSecondNumber extends TileNumber.Set>(
    first: Tile<TFirstColor, TileNumber.Set>,
    second: Tile<TileColor.Set, TSecondNumber>
): second is Tile<TFirstColor, TSecondNumber> {
    return first.color === second.color;
}

/** See README for discussion of the DistributeOver pattern. */
type _DistributeRunOf3OverNumber<Color extends TileColor.Set, FirstTileNumber> =
    FirstTileNumber extends TileNumber.Set
    ? [
        Tile<Color, FirstTileNumber>
        , Tile<Color, TileNumber.Successor<FirstTileNumber>>
        , Tile<Color, TileNumber.Successor<TileNumber.Successor<FirstTileNumber>>>
    ]
    : never;

/** See README for discussion of the DistributeOver pattern. */
type _DistributeRunOf3OverColor<Color> =
    Color extends TileColor.Set
    ? _DistributeRunOf3OverNumber<Color, TileNumber.Set>
    : never;

/** A run consisting of 3 tiles. For the more generic type see Run. */
export type RunOf3 = _DistributeRunOf3OverColor<TileColor.Set>

/** Type guard: Vouches that an array of tiles is actually a Run of 3. */
export function isRunOf3(tiles: Tile<TileColor.Set, TileNumber.Set>[]): tiles is RunOf3 {
    if (tiles.length !== 3)
        return false;

    const [first, second, third] = tiles;
    return isPredecessorOf(first, second)
        && isPredecessorOf(second, third)
        && hasSameColor(first, second)
        && hasSameColor(second, third);
}

/** See README for discussion of the DistributeOver pattern. */
type _DistributeRunOf4OverNumber<Color extends TileColor.Set, FirstTileNumber> =
    FirstTileNumber extends TileNumber.Set
    ? [
        Tile<Color, FirstTileNumber>
        , Tile<Color, TileNumber.Successor<FirstTileNumber>>
        , Tile<Color, TileNumber.Successor<TileNumber.Successor<FirstTileNumber>>>
        , Tile<Color, TileNumber.Successor<TileNumber.Successor<TileNumber.Successor<FirstTileNumber>>>>
    ]
    : never;

/** See README for discussion of the DistributeOver pattern. */
type _DistributeRunOf4OverColor<Color> =
    Color extends TileColor.Set
    ? _DistributeRunOf4OverNumber<Color, TileNumber.Set>
    : never;

/** A run consisting of 4 tiles. For the more generic type see Run. */
export type RunOf4 = _DistributeRunOf4OverColor<TileColor.Set>;

/** Type guard: Vouches that an array of tiles is actually a Run of 4. */
export function isRunOf4(tiles: Tile<TileColor.Set, TileNumber.Set>[]): tiles is RunOf4 {
    if (tiles.length !== 4)
        return false;

    const [first, second, third, fourth] = tiles;
    return isPredecessorOf(first, second)
        && isPredecessorOf(second, third)
        && isPredecessorOf(third, fourth)
        && hasSameColor(first, second)
        && hasSameColor(second, third)
        && hasSameColor(third, fourth);
}

/** See README for discussion of the DistributeOver pattern. */
type _DistributeRunOf5OverNumber<Color extends TileColor.Set, FirstTileNumber> =
    FirstTileNumber extends TileNumber.Set
    ? [
        Tile<Color, FirstTileNumber>
        , Tile<Color, TileNumber.Successor<FirstTileNumber>>
        , Tile<Color, TileNumber.Successor<TileNumber.Successor<FirstTileNumber>>>
        , Tile<Color, TileNumber.Successor<TileNumber.Successor<TileNumber.Successor<FirstTileNumber>>>>
        , Tile<Color, TileNumber.Successor<TileNumber.Successor<TileNumber.Successor<TileNumber.Successor<FirstTileNumber>>>>>
    ]
    : never;

/** See README for discussion of the DistributeOver pattern. */
type _DistributeRunOf5OverColor<Color> =
    Color extends TileColor.Set
    ? _DistributeRunOf5OverNumber<Color, TileNumber.Set>
    : never;

/** A run consisting of 5 tiles. For the more generic type see Run. */
export type RunOf5 = _DistributeRunOf5OverColor<TileColor.Set>;

/** Type guard: Vouches that an array of tiles is actually a Run of 5. */
export function isRunOf5(tiles: Tile<TileColor.Set, TileNumber.Set>[]): tiles is RunOf5 {
    if (tiles.length !== 5)
        return false;

    const [first, second, third, fourth, fifth] = tiles;
    return isPredecessorOf(first, second)
        && isPredecessorOf(second, third)
        && isPredecessorOf(third, fourth)
        && isPredecessorOf(fourth, fifth)
        && hasSameColor(first, second)
        && hasSameColor(second, third)
        && hasSameColor(third, fourth)
        && hasSameColor(fourth, fifth);
}

/** See README for discussion of the DistributeOver pattern. */
type _DistributeRunOf6OverNumber<Color extends TileColor.Set, FirstTileNumber> =
    FirstTileNumber extends TileNumber.Set
    ? [
        Tile<Color, FirstTileNumber>
        , Tile<Color, TileNumber.Successor<FirstTileNumber>>
        , Tile<Color, TileNumber.Successor<TileNumber.Successor<FirstTileNumber>>>
        , Tile<Color, TileNumber.Successor<TileNumber.Successor<TileNumber.Successor<FirstTileNumber>>>>
        , Tile<Color, TileNumber.Successor<TileNumber.Successor<TileNumber.Successor<TileNumber.Successor<FirstTileNumber>>>>>
        , Tile<Color, TileNumber.Successor<TileNumber.Successor<TileNumber.Successor<TileNumber.Successor<TileNumber.Successor<FirstTileNumber>>>>>>
    ]
    : never;

/** See README for discussion of the DistributeOver pattern. */
type _DistributeRunOf6OverColor<Color> =
    Color extends TileColor.Set
    ? _DistributeRunOf6OverNumber<Color, TileNumber.Set>
    : never;

/** A run consisting of 6 tiles. For the more generic type see Run. */
export type RunOf6 = _DistributeRunOf6OverColor<TileColor.Set>;

/** Type guard: Vouches that an array of tiles is actually a Run of 6. */
export function isRunOf6(tiles: Tile<TileColor.Set, TileNumber.Set>[]): tiles is RunOf6 {
    if (tiles.length !== 6)
        return false;

    const [first, second, third, fourth, fifth, sixth] = tiles;
    return isPredecessorOf(first, second)
        && isPredecessorOf(second, third)
        && isPredecessorOf(third, fourth)
        && isPredecessorOf(fourth, fifth)
        && isPredecessorOf(fifth, sixth)
        && hasSameColor(first, second)
        && hasSameColor(second, third)
        && hasSameColor(third, fourth)        
        && hasSameColor(fourth, fifth)
        && hasSameColor(fifth, sixth);
}

/** See README for discussion of the DistributeOver pattern. */
type _DistributeRunOf7OverNumber<Color extends TileColor.Set, FirstTileNumber> =
    FirstTileNumber extends TileNumber.Set
    ? [
        Tile<Color, FirstTileNumber>
        , Tile<Color, TileNumber.Successor<FirstTileNumber>>
        , Tile<Color, TileNumber.Successor<TileNumber.Successor<FirstTileNumber>>>
        , Tile<Color, TileNumber.Successor<TileNumber.Successor<TileNumber.Successor<FirstTileNumber>>>>
        , Tile<Color, TileNumber.Successor<TileNumber.Successor<TileNumber.Successor<TileNumber.Successor<FirstTileNumber>>>>>
        , Tile<Color, TileNumber.Successor<TileNumber.Successor<TileNumber.Successor<TileNumber.Successor<TileNumber.Successor<FirstTileNumber>>>>>>
        , Tile<Color, TileNumber.Successor<TileNumber.Successor<TileNumber.Successor<TileNumber.Successor<TileNumber.Successor<TileNumber.Successor<FirstTileNumber>>>>>>>
    ]
    : never;

/** See README for discussion of the DistributeOver pattern. */
type _DistributeRunOf7OverColor<Color> =
    Color extends TileColor.Set
    ? _DistributeRunOf7OverNumber<Color, TileNumber.Set>
    : never;

/** A run consisting of 6 tiles. For the more generic type see Run. */
export type RunOf7 = _DistributeRunOf7OverColor<TileColor.Set>;

/** Type guard: Vouches that an array of tiles is actually a Run of 6. */
export function isRunOf7(tiles: Tile<TileColor.Set, TileNumber.Set>[]): tiles is RunOf6 {
    if (tiles.length !== 7)
        return false;

    const [first, second, third, fourth, fifth, sixth, seventh] = tiles;
    return isPredecessorOf(first, second)
        && isPredecessorOf(second, third)
        && isPredecessorOf(third, fourth)
        && isPredecessorOf(fourth, fifth)
        && isPredecessorOf(fifth, sixth)
        && isPredecessorOf(sixth, seventh)
        && hasSameColor(first, second)
        && hasSameColor(second, third)
        && hasSameColor(third, fourth)        
        && hasSameColor(fourth, fifth)
        && hasSameColor(fifth, sixth)
        && hasSameColor(sixth, seventh);
}

/**
 * A Run is a collection of tiles where 
 * * the numbers are ascending contiguous ex. 2, 3, 4, 5.
 * * all of the tiles share the exact same color.
 */
export type Run<TFirst extends TileNumber.Set> =
    RunOf3
    | RunOf4
    | RunOf5
    | RunOf6
    | RunOf7;  

/** Type guard: Vouches that an array of tiles is actually a Run. */
export function isRun(tiles: Tile<TileColor.Set, TileNumber.Set>[]): tiles is Run<TileNumber.Set> {
    return isRunOf3(tiles)
        || isRunOf4(tiles)
        || isRunOf5(tiles)
        || isRunOf6(tiles)
        || isRunOf7(tiles);
}