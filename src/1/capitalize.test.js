import { capitalize } from "./capitalize.js";

describe("capitalize", () => {
    test("Works with a single word", () => {
        expect(capitalize("miaw")).toBe("Miaw");
    });

    test("Works with multiple words", () => {
        expect(capitalize("Miaw quack")).toBe("Miaw quack");
    });
})

