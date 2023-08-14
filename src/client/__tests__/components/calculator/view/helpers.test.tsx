import { checkBracketBalanced, round } from "../../../../src/components/calculator/view/helpers";

describe('Utility Functions', () => {
  describe('checkBracketBalanced', () => {
    it('returns true for balanced brackets', () => {
      expect(checkBracketBalanced('(a + b)')).toBe(true);
      expect(checkBracketBalanced('((a + b) + (c - d))')).toBe(true);
    });

    it('returns false for unbalanced brackets', () => {
      expect(checkBracketBalanced('(a + b')).toBe(false);
      expect(checkBracketBalanced('(a + b))')).toBe(false);
      expect(checkBracketBalanced(')a + b(')).toBe(false);
    });
  });

  describe('round', () => {
    it('rounds a number with the specified decimal places', () => {
      expect(round(5.6789, 2)).toBe(5.68);
      expect(round(10.12345, 3)).toBe(10.123);
    });
  });
});
