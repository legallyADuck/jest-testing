import { add, subtract, divide, multiply } from "./calculator.js";

describe("add", () => {
    test("Works", () => {
        expect(add(1, 2)).toBe(3);
    });

    test("Works with big numbers", () => {
        expect(add(10000, 300000)).toBe((300000 + 10000));
    });

    test("Works with strings", () => {
        expect(add("1", "3")).toBe(4);
    });
})

describe("subtract", () => {
    test("Works", () => {
        expect(subtract(1, 2)).toBe(-1);
    });

    test("Works with big numbers", () => {
        expect(subtract(10000, 300000)).toBe((10000 - 300000));
    });

    test("Works with strings", () => {
        expect(subtract("1", "3")).toBe(-2);
    });
})

describe("divide", () => {
    test("Works", () => {
        expect(divide(2, 1)).toBe(2);
    });

    test("Works with big numbers", () => {
        expect(divide(200000, 100000)).toBe((2));
    });

    test("Works with strings", () => {
        expect(divide("3", "1")).toBe(3);
    });
})

describe("multiply", () => {
    test("Works", () => {
        expect(multiply(4, 2)).toBe(8);
    });

    test("Works with big numbers", () => {
        expect(multiply(200000, 100000)).toBe((200000 * 100000));
    });

    test("Works with strings", () => {
        expect(multiply("3", "1")).toBe(3);
    });
})