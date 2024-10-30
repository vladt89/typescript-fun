import {decodeNumValues} from "../src/decode-num-values";

describe("Tests for decoding num values from string", () => {
    test('should provide 0 if there is an empty string', () => {
        // EXERCISE
        const result = decodeNumValues('');
        // VERIFY
        expect(result).toEqual(0);
    });  
});
