import React, { useCallback } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { calculateAnswer, updateAnswer } from "../../../data/actions";
import { checkBracketBalanced } from "./helpers";
import { State } from "../../../data/store";

type DisplayProps = {
    input: string;
    onChangeTagInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
    clearInput: () => void;
    backspace: () => void;
};

const Display: React.FC<DisplayProps> = ({ input, onChangeTagInput, inputHandler, clearInput, backspace }) => {
    const dispatch = useDispatch();

    const calculationAnswer = useSelector(
        (state: State) => state.calculations.answer
    );

    const calculateAns = useCallback(() => {
        if (input === "") return;
        let finalexpression = input;
        finalexpression = finalexpression.replaceAll("x", "*");
        finalexpression = finalexpression.replaceAll("÷", "/");

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
            return finalexpression;
        }
    }, [input]);

    return (
        <>
            <div className="container">
                <div className="main">
                    <>
                        <div className="display">
                            {calculationAnswer === "" ? (
                                <>
                                    <input
                                        type="text"
                                        name="input"
                                        className="input"
                                        style={{ padding: "29px" }}
                                        value={input}
                                        placeholder="0"
                                        maxLength={12}
                                        onChange={onChangeTagInput}
                                        autoComplete="off"
                                    />
                                </>
                            ) : (
                                <>
                                    <input
                                        type="text"
                                        name="input"
                                        className="value"
                                        value={input}
                                        placeholder="0"
                                        maxLength={12}
                                        disabled
                                    />
                                    <input
                                        type="text"
                                        name="value"
                                        className="input"
                                        value={calculationAnswer}
                                        disabled
                                    />
                                </>
                            )}
                        </div>
                    </>
                    <div className="show-btn">
                        <button className="btn exp" onClick={inputHandler}>
                            ^
                        </button>
                        <button className="btn exp" onClick={inputHandler}>
                            (
                        </button>
                        <button className="btn exp" onClick={inputHandler}>
                            )
                        </button>
                        <button className="btn exp" onClick={inputHandler}>
                            √
                        </button>
                        <button className="btn exp" onClick={inputHandler}>
                            x<sup>2</sup>
                        </button>
                        <button className="btn" onClick={inputHandler}>
                            0
                        </button>
                        <button className="btn" onClick={inputHandler}>
                            1
                        </button>
                        <button className="btn" onClick={inputHandler}>
                            2
                        </button>
                        <button className="btn clr" onClick={() => {
                            clearInput();
                            dispatch(updateAnswer(""));
                        }}>
                            AC
                        </button>
                        <button className="btn clr" onClick={backspace}>
                            ⌫
                        </button>
                        <button className="btn" onClick={inputHandler}>
                            3
                        </button>
                        <button className="btn" onClick={inputHandler}>
                            4
                        </button>
                        <button className="btn" onClick={inputHandler}>
                            5
                        </button>
                        <button className="btn exp" onClick={inputHandler}>
                            log
                        </button>
                        <button className="btn exp" onClick={inputHandler}>
                            x<sup>3</sup>
                        </button>
                        <button className="btn" onClick={inputHandler}>
                            6
                        </button>
                        <button className="btn" onClick={inputHandler}>
                            7
                        </button>
                        <button className="btn" onClick={inputHandler}>
                            8
                        </button>
                        <button className="btn exp" onClick={inputHandler}>
                            ÷
                        </button>
                        <button className="btn exp" onClick={inputHandler}>
                            x
                        </button>
                        <button className="btn" onClick={inputHandler}>
                            9
                        </button>
                        <button className="btn exp" onClick={inputHandler}>
                            .
                        </button>
                        <button className="btn exp" onClick={inputHandler}>
                            +
                        </button>
                        <button className="btn exp" onClick={inputHandler}>
                            -
                        </button>
                        <button className="btn exp" onClick={inputHandler}>
                            <sup>3</sup>√
                        </button>
                        <button className="btn exp equal" id="equalbtn" onClick={() => {
                            const calculation = calculateAns() ?? "";
                            dispatch(calculateAnswer(calculation));
                        }}>
                            =
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Display;
