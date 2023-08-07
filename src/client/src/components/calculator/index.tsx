import { useState, MouseEvent } from "react";
import Display from "./view";
import { updateAnswer } from "../../data/actions";

const Calculator = () => {
  const [input, setInput] = useState<string>("");

  const inputHandler = (event: MouseEvent<HTMLButtonElement>) => {
    let val = event.currentTarget.innerText;

    if (val === "x2") val = "^2";
    else if (val === "x3") val = "^3";
    else if (val === "3√") val = "^(1÷3)";
    else if (val === "log") val = "log(";

    let str = input + val;
    if (str.length > 14) return;

    updateAnswer("");
    setInput(str);
  };

  const clearInput = () => {
    setInput("");
  };

  const backspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const onChangeTagInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const re = /^[!%(-+\x2D-9^glox\xF7\u221A]+$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      setInput(e.target.value);
    }
  };

  return (
    <Display backspace={backspace} onChangeTagInput={onChangeTagInput} clearInput={clearInput} input={input} inputHandler={inputHandler} />
  );
}

export default Calculator;
