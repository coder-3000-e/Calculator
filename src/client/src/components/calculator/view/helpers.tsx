export const checkBracketBalanced = (expr: string): boolean => {
    let stack: string[] = [];
    for (let i = 0; i < expr.length; i++) {
      let x = expr[i];
      if (x === "(") {
        stack.push(x);
        continue;
      }

      if (x === ")") {
        if (stack.length === 0) return false;
        else stack.pop();
      }
    }
    return stack.length === 0;
  };

  export const round = (num: number, fractionDigits: number): number => {
    return Number(num.toFixed(fractionDigits));
  };