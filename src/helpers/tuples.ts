/** Type guard: Determine if array is tuple of two elements */
export function isTuple<T>(num: 2, arr: T[]): arr is [T, T];
/** Type guard: Determine if array is tuple of three elements */
export function isTuple<T>(num: 3, arr: T[]): arr is [T, T, T];
/** Type guard: Determine if array is tuple of four elements */
export function isTuple<T>(num: 4, arr: T[]): arr is [T, T, T, T];
/** Type guard: Determine if array is tuple of five elements */
export function isTuple<T>(num: 5, arr: T[]): arr is [T, T, T, T, T];
export function isTuple<T>(num: number, arr: T[]): any {
    return arr.length === num;
}
