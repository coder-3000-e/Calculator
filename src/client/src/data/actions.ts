import { BasicAlgebraRequestedAction, additionAction, CalculateRequestedAction, UpdateAnswerAction, absoluteDifference, angleBetweenVectors, angleRegularPolygon, arcLength, areaOfCircle, areaOfCircleGivenCenter, arithmeticProgressionSum, arithmeticProgressionTerm, baseConversion, areaOftriangle } from "./epics/action-types";

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

export const basicAlgebra = (): BasicAlgebraRequestedAction => ({
    type: 'BASIC_ALGEBRA_REQUESTED',
});

export const addition = (): additionAction => ({
    type: 'ADDITION_REQUESTED',
});
export const absolute_difference = (): absoluteDifference => ({
    type: 'ABSOLUTE_DIFFERENCE_REQUESTED',
});
export const angle_btw_vectors = (): angleBetweenVectors => ({
    type: 'ANGLE_BTW_VECTOR_REQUESTED',
});
export const angle_regular_polygon = (): angleRegularPolygon => ({
    type: 'ANGLE_REGULAR_POLYGON_REQUESTED',
});
export const arc_length = (): arcLength => ({
    type: 'ARC_LENGTH_REQUESTED',
});
export const area_of_circle = (): areaOfCircle => ({
    type: 'AREA_OF_CIRCLE_REQUESTED',
});
export const area_of_Triangle = (): areaOftriangle => ({
    type: 'AREA_OF_TRIANGLE_REQUESTED',
});
export const area_of_circle_given_center_and_pointarea_of_triangle = (): areaOfCircleGivenCenter => ({
    type: 'AREA_OF_CIRCLE_GIVEN_CENTER_REQUESTED',
});

export const arithmetic_progression_sum = (): arithmeticProgressionSum => ({
    type: 'ARITHMETIC_PROGRESSION_SUM_REQUESTED',
});

export const arithmetic_progression_term = (): arithmeticProgressionTerm => ({
    type: 'ARITHMETIC_PROGRESSION_TERM_REQUESTED',
});

export const base_conversion = (): baseConversion => ({
    type: 'BASE_CONVERSION_REQUESTED',
});
