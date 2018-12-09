/** Type representing the entire set of all valid Rummikub tile numbers. */
export type Set = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

/** Return the successor type for a given tile number type. */
export type Successor<TCurrent extends Set> = 
    TCurrent extends 1 ? 2
    : TCurrent extends 2 ? 3
    : TCurrent extends 3 ? 4
    : TCurrent extends 4 ? 5
    : TCurrent extends 5 ? 6
    : TCurrent extends 6 ? 7
    : TCurrent extends 7 ? 8
    : TCurrent extends 8 ? 9
    : TCurrent extends 9 ? 10
    : TCurrent extends 10 ? 11
    : TCurrent extends 11 ? 12
    : TCurrent extends 12 ? 13
    : never;

/** 
 * Check that the first is the predecessor of the second and therefore vouch to the compiler that the tile number type of the second is the successor of the first. 
 * 
 * **Confused?** As a standard function (not a type guard) the naming makes sense when reading in a left to right fashion or if the function were made infix.
 * However, the stress is a little odd because the type assertion is on the second argument. 
 **/
export function isPredecessorOf<TFirst extends Set>(first: TFirst, second: Set): second is Successor<TFirst> {
    return (first + 1) === second;
}
