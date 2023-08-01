import { CalculateRequestedAction, UpdateAnswerAction } from "./epics/action-types";

export const calculateAnswer = (
    calculation: string
): CalculateRequestedAction => ({
    type: 'CALCULATION_REQUESTED',
    payload: { calculation },
})

export const updateAnswer = (newValue: string): UpdateAnswerAction => ({
    type: 'UPDATE_ANSWER',
    payload: { newValue },
  });