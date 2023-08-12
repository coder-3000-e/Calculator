import { round } from "../components/calculator/view/helpers";
import { CalculateRequestedAction, CalculateSucceededAction, CalculateFailureAction, UpdateAnswerAction, MathProblemGeneratorSucceededAction, MathProblemGeneratorFailureAction } from "./epics/action-types";
import { CalculatorStatus } from "./types";
import { Reducer } from 'redux';

export type calculatorAction =
    | CalculateRequestedAction
    | CalculateSucceededAction
    | CalculateFailureAction
    | UpdateAnswerAction
    | MathProblemGeneratorSucceededAction
    | MathProblemGeneratorFailureAction;

const reducer: Reducer<CalculatorStatus, calculatorAction> = (
    state = { answer: '', problem: '', solution: '' },
    action: calculatorAction,
) => {
    switch (action.type) {
        case 'CALCULATION_REQUESTED':
            return {
                ...state,
            };

        case 'CALCULATION_SUCCEEDED':
            const { response } = action.payload;
            const resultResponse = response.data.result;
            const result =
                isNaN(resultResponse)
                    ? resultResponse
                    : round(resultResponse, 3);
            return {
                ...state,
                answer: result
            };

        case 'CALCULATION_FAILED':
            return {
                ...state
            };
        case 'UPDATE_ANSWER': {
            const { newValue } = action.payload;

            const newValueInt = Number(newValue);
            const result =
                isNaN(newValueInt)
                    ? newValueInt
                    : round(newValueInt, 3);
            return {
                ...state,
                answer: result
            };
        }

        case 'MATH_PROBLEM_GENERATOR_SUCCEEDED': {
            const { response } = action.payload;
            const solution = response.data.solution;
            const problem = response.data.problem;
            return {
                ...state,
                solution: solution,
                problem: problem
            };
        }

        case 'MATH_PROBLEM_GENERATOR_FAILED':
            return {
                ...state
            };

        default:
            return state;
    }
};

export default reducer;
