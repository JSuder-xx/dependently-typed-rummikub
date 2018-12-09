import TileColor = require("./color");
import TileNumber = require("./tile_number");

import { Tile } from "./tile";

/**
 * Type Guard: Checks that both tiles have the same number and narrows the type of the **second** tile.
 */
export function hasSameNumber<TFirstNumber extends TileNumber.Set, TSecondColor extends TileColor.Set>(
    first: Tile<TileColor.Set, TFirstNumber>,
    second: Tile<TSecondColor, TileNumber.Set>
): second is Tile<TSecondColor, TFirstNumber> {
    return first.num === second.num;
}

type ExcludeFromUnion<Union, UnionToSubtract> = 
    Union extends UnionToSubtract ? never : Union;

/** Create a new set of colors that is all of the colors less the colors provided. */
type ExcludeColors<SubtractionSet> = ExcludeFromUnion<TileColor.Set, SubtractionSet>;

/** See README for discussion of the DistributeOver pattern. */
type _DistributeGroupOf3OverSecondColor<FirstColor extends TileColor.Set, SecondColor extends TileColor.Set, TileNumber extends TileNumber.Set> =
    SecondColor extends TileColor.Set
    ? [
        Tile<FirstColor, TileNumber>
        , Tile<SecondColor, TileNumber>
        , Tile<ExcludeColors<FirstColor | SecondColor>, TileNumber>
    ]
    : never;

/** See README for discussion of the DistributeOver pattern. */
type _DistributeGroupOf3OverFirstColor<FirstColor, TileNumber extends TileNumber.Set> =
    FirstColor extends TileColor.Set
    ? _DistributeGroupOf3OverSecondColor<FirstColor, ExcludeColors<FirstColor>, TileNumber>
    : never;

/** See README for discussion of the DistributeOver pattern. */
type _DistributeGroupOf3OverNumber<TileNumber> =
    TileNumber extends TileNumber.Set
    ? _DistributeGroupOf3OverFirstColor<TileColor.Set, TileNumber>
    : never;

/** A group of 3 tiles that have distinct colors and the same number. */
export type GroupOf3 = _DistributeGroupOf3OverNumber<TileNumber.Set>;

/** Type Guard: Test and vouch that the array of tiles is a group of 3 tiles. */
export function isGroupOf3(tiles: Tile<TileColor.Set, TileNumber.Set>[]): tiles is GroupOf3 {
    if (tiles.length !== 3)
        return false;

    const [first, second, third] = tiles;
    return hasSameNumber(first, second)
        && hasSameNumber(second, third)
        && first.color !== second.color
        && first.color !== third.color
        && second.color !== third.color;
}

/** See README for discussion of the DistributeOver pattern. */
type _DistributeGroupOf4OverThirdColor<FirstColor extends TileColor.Set, SecondColor extends TileColor.Set, ThirdColor, TileNumber extends TileNumber.Set> =
    ThirdColor extends TileColor.Set
    ? [
        Tile<FirstColor, TileNumber>
        , Tile<SecondColor, TileNumber>
        , Tile<ThirdColor, TileNumber>
        , Tile<ExcludeColors<FirstColor | SecondColor | ThirdColor>, TileNumber>
    ]
    : never;

/** See README for discussion of the DistributeOver pattern. */
type _DistributeGroupOf4OverSecondColor<FirstColor extends TileColor.Set, SecondColor, TileNumber extends TileNumber.Set> =
    SecondColor extends TileColor.Set
    ? _DistributeGroupOf4OverThirdColor<FirstColor, SecondColor, ExcludeColors<FirstColor | SecondColor>, TileNumber>
    : never;

/** See README for discussion of the DistributeOver pattern. */
type _DistributeGroupOf4OverFirstColor<FirstColor, TileNumber extends TileNumber.Set> =
    FirstColor extends TileColor.Set
    ? _DistributeGroupOf4OverSecondColor<FirstColor, ExcludeColors<FirstColor>, TileNumber>
    : never;

/** See README for discussion of the DistributeOver pattern. */
type _DistributeGroupOf4OverNumber<TileNumber> =
    TileNumber extends TileNumber.Set
    ? _DistributeGroupOf4OverFirstColor<TileColor.Set, TileNumber>
    : never;

/** A group of 4 tiles that have distinct colors (non-repeating) and the same number. */
export type GroupOf4 = _DistributeGroupOf4OverNumber<TileNumber.Set>;

/** Type Guard: Test and vouch that the array of tiles is a group of 4 tiles. */
export function isGroupOf4(tiles: Tile<TileColor.Set, TileNumber.Set>[]): tiles is GroupOf3 {
    if (tiles.length !== 4)
        return false;

    const [first, second, third, fourth] = tiles;
    return hasSameNumber(first, second)
        && hasSameNumber(second, third)
        && hasSameNumber(third, fourth)
        && first.color !== second.color
        && first.color !== third.color
        && first.color !== fourth.color
        && second.color !== third.color
        && second.color !== fourth.color
        && third.color !== fourth.color;
}

/** A group of 
 * * at least 3 tiles (or 4 tiles)
 * * with distinct colors 
 * * and the same tile number. 
 **/
export type Group = GroupOf3 | GroupOf4;

/** Type Guard: Test and vouch that the array of tiles is a group. */
export function isGroup(tiles: Tile<TileColor.Set, TileNumber.Set>[]): tiles is Group {
    return isGroupOf3(tiles)
        || isGroupOf4(tiles);
}