import React from "react";
import "./styles.css";

type DisplayProps = {
    answer: string;
    input: string;
    onChangeTagInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
    clearInput: () => void;
    backspace: () => void;
    calculateAns: () => Promise<void>;
    changePlusMinus: () => void;
};

const Display: React.FC<DisplayProps> = ({ answer, input, onChangeTagInput, inputHandler, clearInput, backspace, calculateAns, changePlusMinus }) => {
    return (
        <>
            <div className="container">
                <div className="main">
                    <>
                        <div className="display">
                            {answer === "" ? (
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
                                        value={answer}
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
                        <button className="btn clr" onClick={clearInput}>
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
                            ±
                        </button>
                        <button className="btn exp" onClick={inputHandler}>
                            <sup>3</sup>√
                        </button>
                        <button className="btn exp" onClick={inputHandler}>
                            +
                        </button>
                        <button className="btn exp" onClick={changePlusMinus}>
                            -
                        </button>
                        <button className="btn exp" onClick={inputHandler}>
                            .
                        </button>
                        <button className="btn exp equal" id="equalbtn" onClick={calculateAns}>
                            =
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Display;
