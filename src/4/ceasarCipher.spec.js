import { ceasarCipher } from "./ceasarCipher.js";

describe("ceasar cypher", () => {
    test("works", () => {
        expect(ceasarCipher("miaw miaw", 7)).toBe("tphd tphd");
    });

    test("Works with mayus", () => {
        expect(ceasarCipher("Quack Miaw", 3)).toBe("Txdfn Pldz");
    });

    test("Works with different shift factor", () => {
        expect(ceasarCipher("miaw", 1)).toBe("njbx");
    });
})