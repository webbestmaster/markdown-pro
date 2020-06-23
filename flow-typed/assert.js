// @flow

declare module 'assert' {
    declare export default function assert(isOk: boolean, errorMessage?: string | Error): void;

    declare export function deepStrictEqual(actual: mixed, expected: mixed, errorMessage: string | Error): void;

    declare export function rejects(functionAwaitError: () => Promise<mixed>): void;
}
