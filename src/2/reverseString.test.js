import { reverseString } from "./reverseString.js";

describe("reverseString", () => {
    test("Works with a single word", () => {
        expect(reverseString("miaw")).toBe("waim");
    });

    test("Works with multiple words", () => {
        expect(reverseString("miaw quack")).toBe("kcauq waim");
    });

    test("Works with numbers", () => {
        expect(reverseString("miaw quack")).toBe("kcauq waim");
    });
})
