import { CalculateRequestedAction, CalculateSucceededAction, CalculateFailureAction } from "./epics/action-types";
import { CalculationStatus } from "./types";
import { Reducer } from 'redux';

export type CalculationAction =
    | CalculateRequestedAction
    | CalculateSucceededAction
    | CalculateFailureAction;

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
            return {
                ...state,
                answer: response.data
            };

        case 'CALCULATION_FAILED':
            return {
                ...state
            };

        default:
            return state;
    }
};

export default reducer;
