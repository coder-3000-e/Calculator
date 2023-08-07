import { AxiosError, AxiosResponse } from 'axios'
import { ErrorAction, PayloadAction } from './types';
import { Action } from 'redux';

export type CalculateRequestedAction = PayloadAction<
    'CALCULATION_REQUESTED',
    {
        calculation: string;
    }
>;

export type CalculateSucceededAction = PayloadAction<'CALCULATION_SUCCEEDED', {
    response: AxiosResponse;
}>;

export type CalculateFailureAction = ErrorAction<
    'CALCULATION_FAILED',
    { response: AxiosError }>

export type UpdateAnswerAction = PayloadAction<
    'UPDATE_ANSWER',
    {
        newValue: string;
    }
>;

export type BasicAlgebraRequestedAction = Action<
    'BASIC_ALGEBRA_REQUESTED'
>;

export type MathProblemGeneratorSucceededAction = PayloadAction<'MATH_PROBLEM_GENERATOR_SUCCEEDED', {
    response: AxiosResponse;
}>;

export type MathProblemGeneratorFailureAction = ErrorAction<
    'MATH_PROBLEM_GENERATOR_FAILED',
    { response: AxiosError }>

export type additionAction = Action<
    'ADDITION_REQUESTED'
>;

export type absoluteDifference = Action<
    'ABSOLUTE_DIFFERENCE_REQUESTED'
>;

export type angleBetweenVectors = Action<
    'ANGLE_BTW_VECTOR_REQUESTED'
>;

export type angleRegularPolygon = Action<
    'ANGLE_REGULAR_POLYGON_REQUESTED'
>;

export type arcLength = Action<
    'ARC_LENGTH_REQUESTED'
>;

export type areaOftriangle = Action<
    'AREA_OF_TRIANGLE_REQUESTED'
>;

export type areaOfCircle = Action<
    'AREA_OF_CIRCLE_REQUESTED'
>;

export type areaOfCircleGivenCenter = Action<
    'AREA_OF_CIRCLE_GIVEN_CENTER_REQUESTED'
>;

export type arithmeticProgressionSum = Action<
    'ARITHMETIC_PROGRESSION_SUM_REQUESTED'
>;

export type arithmeticProgressionTerm = Action<
    'ARITHMETIC_PROGRESSION_TERM_REQUESTED'
>;

export type baseConversion = Action<
    'BASE_CONVERSION_REQUESTED'
>;