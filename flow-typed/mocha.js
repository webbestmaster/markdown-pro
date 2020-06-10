// @flow

/* eslint-disable id-match, max-len */

declare module 'mocha' {
    declare type TestStateType = 'failed' | 'passed';

    declare interface $npm$mocha$Suite {
        parent: $npm$mocha$Suite,
        title: string,
        fullTitle(): string,
    }

    declare interface $npm$mocha$Runnable {
        title: string,
        fn: () => mixed,
        async: boolean,
        sync: boolean,
        timedOut: boolean,
    }

    declare interface $npm$mocha$Test extends $npm$mocha$Runnable {
        parent: $npm$mocha$Suite,
        pending: boolean,
        state: TestStateType | void,
        fullTitle(): string,
        timeout(ms: number): void,
    }

    declare interface $npm$mocha$ContextDefinition {
        (description: string, callback: () => /* this: $npm$mocha$SuiteCallbackContext */ mixed): $npm$mocha$Suite,
        only(description: string, callback: () => /* this: $npm$mocha$SuiteCallbackContext */ mixed): $npm$mocha$Suite,
        skip(description: string, callback: () => /* this: $npm$mocha$SuiteCallbackContext */ mixed): void,
        timeout(ms: number): void,
    }

    declare type $npm$mocha$done = (error?: Error) => mixed;

    declare interface $npm$mocha$TestDefinition {
        (
            expectation: string,
            callback?: (/* this: $npm$mocha$TestCallbackContext, */ done: $npm$mocha$done) => mixed,
        ): $npm$mocha$Test,
        only(
            expectation: string,
            callback?: (/* this: $npm$mocha$TestCallbackContext, */ done: $npm$mocha$done) => mixed,
        ): $npm$mocha$Test,
        skip(
            expectation: string,
            callback?: (/* this: $npm$mocha$TestCallbackContext, */ done: $npm$mocha$done) => mixed,
        ): void,
        timeout(ms: number): void,
        state: TestStateType,
    }

    declare export function before(
        callback: (/* this: $npm$mocha$HookCallbackContext, */ done: $npm$mocha$done) => mixed,
    ): void;
    declare export function before(
        description: string,
        callback: (/* this: $npm$mocha$HookCallbackContext, */ done: $npm$mocha$done) => mixed,
    ): void;
    declare export function after(
        callback: (/* this: $npm$mocha$HookCallbackContext, */ done: $npm$mocha$done) => mixed,
    ): void;
    declare export function after(
        description: string,
        callback: (/* this: $npm$mocha$HookCallbackContext, */ done: $npm$mocha$done) => mixed,
    ): void;
    declare export function beforeEach(
        callback: (/* this: $npm$mocha$BeforeAndAfterContext, */ done: $npm$mocha$done) => mixed,
    ): void;
    declare export function beforeEach(
        description: string,
        callback: (/* this: $npm$mocha$BeforeAndAfterContext, */ done: $npm$mocha$done) => mixed,
    ): void;
    declare export function afterEach(
        callback: (/* this: $npm$mocha$BeforeAndAfterContext, */ done: $npm$mocha$done) => mixed,
    ): void;
    declare export function afterEach(
        description: string,
        callback: (/* this: $npm$mocha$BeforeAndAfterContext, */ done: $npm$mocha$done) => mixed,
    ): void;
    declare export var describe: $npm$mocha$ContextDefinition;
    declare export var xdescribe: $npm$mocha$ContextDefinition;
    declare export var context: $npm$mocha$ContextDefinition;
    declare export var suite: $npm$mocha$ContextDefinition;
    declare export var it: $npm$mocha$TestDefinition;
    declare export var xit: $npm$mocha$TestDefinition;
    declare var test: $npm$mocha$TestDefinition;
    declare var specify: $npm$mocha$TestDefinition;
}
