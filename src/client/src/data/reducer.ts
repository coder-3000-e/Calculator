import { round } from "../components/calculator/view/helpers";
import { CalculateRequestedAction, CalculateSucceededAction, CalculateFailureAction, UpdateAnswerAction } from "./epics/action-types";
import { CalculationStatus } from "./types";
import { Reducer } from 'redux';

export type CalculationAction =
    | CalculateRequestedAction
    | CalculateSucceededAction
    | CalculateFailureAction
    | UpdateAnswerAction;

const reducer: Reducer<CalculationStatus, CalculationAction> = (
    state = { answer: '' },
    action: CalculationAction,
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
            debugger;
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

        default:
            return state;
    }
};

export default reducer;
