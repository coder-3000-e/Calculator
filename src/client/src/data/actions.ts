import { CalculateRequestedAction } from "./epics/action-types";

export const calculateAnswer = (
    calculation: string
): CalculateRequestedAction => ({
    type: 'CALCULATION_REQUESTED',
    payload: { calculation },
})