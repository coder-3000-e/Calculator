import { useState, MouseEvent, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../data/store";
import axios from "axios";
import settings from "../../data/settings";
import { CalculateRequestedAction } from "../../data/epics/action-types";
import Display from "./view";

const round = (num: number, fractionDigits: number): number => {
  return Number(num.toFixed(fractionDigits));
};

const Calculator = () => {
  const [input, setInput] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const dispatch = useDispatch();

  const calculationAnswer = useSelector(
    (state: State) => state.calculations.answer
  );

  // Input handler
  const inputHandler = (event: MouseEvent<HTMLButtonElement>) => {
    if (answer === "Invalid Input!!") return;
    let val = event.currentTarget.innerText;

    if (val === "x2") val = "^2";
    else if (val === "x3") val = "^3";
    else if (val === "3√") val = "^(1÷3)";
    else if (val === "log") val = "log(";

    let str = input + val;
    if (str.length > 14) return;

    if (answer !== "") {
      setInput(answer + val);
      setAnswer("");
    } else setInput(str);
  };

  // Clear screen
  const clearInput = () => {
    setInput("");
    setAnswer("");
  };

  // Check if brackets are balanced or not
  const checkBracketBalanced = (expr: string): boolean => {
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


  const calculateAns = useCallback(async () => {
    if (input === "") return;
    let result = 0;
    let finalexpression = input;
    finalexpression = finalexpression.replaceAll("x", "*");
    finalexpression = finalexpression.replaceAll("÷", "/");

    // Evaluate square root
    let noSqrt = input.match(/√[0-9]+/gi);

    if (noSqrt !== null) {
      let evalSqrt = input;
      for (let i = 0; i < noSqrt.length; i++) {
        evalSqrt = evalSqrt.replace(
          noSqrt[i],
          `sqrt(${noSqrt[i].substring(1)})`
        );
      }
      finalexpression = evalSqrt;
    }

    let errors = "";
    try {
      if (!checkBracketBalanced(finalexpression)) {
        const errorMessage = { message: "Brackets are not balanced!" };
        throw errorMessage;
      }

      const response = await axios.post(`${settings.calculatorRoot}/api/v1/Calculator/calculate`, {
        value: finalexpression,
      });

      // Handle the API response
      result = Number(response.data.result);

      console.log(response.data.result);

      const dispatchAction: CalculateRequestedAction = {
        type: 'CALCULATION_REQUESTED',
        payload: {
          calculation: finalexpression,
        },
      };

      dispatch(dispatchAction);

    } catch (error: any) {
      errors =
        error.message === "Brackets are not balanced!"
          ? "Brackets are not balanced!"
          : "Invalid Input!!";
    }
    if (errors !== "") {
      const errorMessage = { message: errors };
      throw errorMessage;
    } else {
      isNaN(result)
        ? setAnswer(result.toString())
        : setAnswer(round(result, 3).toString());
    }
  }, [calculationAnswer, dispatch, input]);

  // Remove last character
  const backspace = () => {
    if (answer !== "") {
      setInput(answer.toString().slice(0, -1));
      setAnswer("");
    } else setInput((prev) => prev.slice(0, -1));
  };

  // Change prefix of expression
  const changePlusMinus = () => {
    if (answer === "Invalid Input!!") return;
    else if (answer !== "") {
      let ans = answer.toString();
      if (ans.charAt(0) === "-") {
        let plus = "+";
        setInput(plus.concat(ans.slice(1, ans.length)));
      } else if (ans.charAt(0) === "+") {
        let minus = "-";
        setInput(minus.concat(ans.slice(1, ans.length)));
      } else {
        let minus = "-";
        setInput(minus.concat(ans));
      }
      setAnswer("");
    } else {
      if (input.charAt(0) === "-") {
        let plus = "+";
        setInput((prev) => plus.concat(prev.slice(1, prev.length)));
      } else if (input.charAt(0) === "+") {
        let minus = "-";
        setInput((prev) => minus.concat(prev.slice(1, prev.length)));
      } else {
        let minus = "-";
        setInput((prev) => minus.concat(prev));
      }
    }
  };

  const onChangeTagInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const re = /^[!%(-+\x2D-9^glox\xF7\u221A]+$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      setInput(e.target.value);
    }
  };

  return (
    <Display answer={answer} backspace={backspace} calculateAns={calculateAns} onChangeTagInput={onChangeTagInput} changePlusMinus={changePlusMinus} clearInput={clearInput} input={input} inputHandler={inputHandler}/>
    // <>
    //   <div className="container">
    //     <div className="main">
    //       <>
    //         <div className="display">
    //           {answer === "" ? (
    //             <>
    //               <input
    //                 type="text"
    //                 name="input"
    //                 className="input"
    //                 style={{ padding: "29px" }}
    //                 value={input}
    //                 placeholder="0"
    //                 maxLength={12}
    //                 onChange={onChangeTagInput}
    //                 autoComplete="off"
    //               />
    //             </>
    //           ) : (
    //             <>
    //               <input
    //                 type="text"
    //                 name="input"
    //                 className="value"
    //                 value={input}
    //                 placeholder="0"
    //                 maxLength={12}
    //                 disabled
    //               />
    //               <input
    //                 type="text"
    //                 name="value"
    //                 className="input"
    //                 value={answer}
    //                 disabled
    //               />
    //             </>
    //           )}
    //         </div>
    //       </>
    //       <div className="show-btn">
    //         <button className="btn exp" onClick={inputHandler}>
    //           ^
    //         </button>
    //         <button className="btn exp" onClick={inputHandler}>
    //           (
    //         </button>
    //         <button className="btn exp" onClick={inputHandler}>
    //           )
    //         </button>
    //         <button className="btn exp" onClick={inputHandler}>
    //           √
    //         </button>
    //         <button className="btn exp" onClick={inputHandler}>
    //           x<sup>2</sup>
    //         </button>
    //         <button className="btn" onClick={inputHandler}>
    //           0
    //         </button>
    //         <button className="btn" onClick={inputHandler}>
    //           1
    //         </button>
    //         <button className="btn" onClick={inputHandler}>
    //           2
    //         </button>
    //         <button className="btn clr" onClick={clearInput}>
    //           AC
    //         </button>
    //         <button className="btn clr" onClick={backspace}>
    //           ⌫
    //         </button>
    //         <button className="btn" onClick={inputHandler}>
    //           3
    //         </button>
    //         <button className="btn" onClick={inputHandler}>
    //           4
    //         </button>
    //         <button className="btn" onClick={inputHandler}>
    //           5
    //         </button>
    //         <button className="btn exp" onClick={inputHandler}>
    //           log
    //         </button>
    //         <button className="btn exp" onClick={inputHandler}>
    //           x<sup>3</sup>
    //         </button>
    //         <button className="btn" onClick={inputHandler}>
    //           6
    //         </button>
    //         <button className="btn" onClick={inputHandler}>
    //           7
    //         </button>
    //         <button className="btn" onClick={inputHandler}>
    //           8
    //         </button>
    //         <button className="btn exp" onClick={inputHandler}>
    //           ÷
    //         </button>
    //         <button className="btn exp" onClick={inputHandler}>
    //           x
    //         </button>
    //         <button className="btn" onClick={inputHandler}>
    //           9
    //         </button>
    //         <button className="btn exp" onClick={inputHandler}>
    //           ±
    //         </button>
    //         <button className="btn exp" onClick={inputHandler}>
    //           <sup>3</sup>√
    //         </button>
    //         <button className="btn exp" onClick={inputHandler}>
    //           +
    //         </button>
    //         <button className="btn exp" onClick={changePlusMinus}>
    //           -
    //         </button>
    //         <button className="btn exp" onClick={inputHandler}>
    //           .
    //         </button>
    //         <button className="btn exp equal" id="equalbtn" onClick={calculateAns}>
    //           =
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}

export default Calculator;
