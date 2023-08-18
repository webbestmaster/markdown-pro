export function stringReverse(someString: string): string {
    // eslint-disable-next-line unicorn/prefer-spread
    return someString.split("").reverse().join("");
}
