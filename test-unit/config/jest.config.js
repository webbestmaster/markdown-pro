// eslint-disable-next-line unicorn/prefer-module
module.exports = {
    globals: {
        'ts-jest': {
            tsconfig: './tsconfig.test.json',
        },
    },
    modulePathIgnorePatterns: ['<rootDir>/tsc-check/'],
    preset: 'ts-jest',
    rootDir: '../../',
    setupFilesAfterEnv: ['./test-unit/config/setup-jest.ts'],
    testEnvironment: 'jsdom', // @testing-library/jest-dom
    testTimeout: 10e3,
};
