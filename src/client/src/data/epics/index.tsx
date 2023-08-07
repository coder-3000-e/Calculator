import { Epic, combineEpics, ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import axios, { AxiosResponse, AxiosError } from 'axios';
import settings from '../settings';

const calculateAnswerEpic: Epic = (action$) =>
  action$.pipe(
    ofType('CALCULATION_REQUESTED'),
    map((action) => action.payload.calculation),
    mergeMap((calculation) => {
      const config = {
        url: `${settings.calculatorRoot}/api/v1/Calculator/calculate`,
        method: 'POST',
        data: { value: calculation },
      };

      return from(axios(config)).pipe(
        map((response: AxiosResponse) => ({
          type: 'CALCULATION_SUCCEEDED',
          payload: { response },
        })),
        catchError((error: AxiosError) =>
          of({
            type: 'CALCULATION_FAILED',
            payload: { response: error },
            error: true,
          })
        )
      );
    })
  );

const generateMathProblemBasicAlgebraEpic: Epic = (action$) =>
  action$.pipe(
    ofType('BASIC_ALGEBRA_REQUESTED'),
    mergeMap(() => {
      const config = {
        url: `${settings.mathProblemGenerate}/basic_algebra`,
        method: 'GET',
      };
      return from(axios(config)).pipe(
        map((response: AxiosResponse) => ({
          type: 'MATH_PROBLEM_GENERATOR_SUCCEEDED',
          payload: { response },
        })),
        catchError((error: AxiosError) =>
          of({
            type: 'MATH_PROBLEM_GENERATOR_FAILED',
            payload: { response: error },
            error: true,
          })
        )
      );
    })
  );

  const generateMathProblemAdditionEpic: Epic = (action$) =>
  action$.pipe(
    ofType('ADDITION_REQUESTED'),
    mergeMap(() => {
      const config = {
        url: `${settings.mathProblemGenerate}/addition`,
        method: 'GET',
      };
      return from(axios(config)).pipe(
        map((response: AxiosResponse) => ({
          type: 'MATH_PROBLEM_GENERATOR_SUCCEEDED',
          payload: { response },
        })),
        catchError((error: AxiosError) =>
          of({
            type: 'MATH_PROBLEM_GENERATOR_FAILED',
            payload: { response: error },
            error: true,
          })
        )
      );
    })
  );

  const generateMathProblemAbsoluteDifferenceEpic: Epic = (action$) =>
  action$.pipe(
    ofType('ABSOLUTE_DIFFERENCE_REQUESTED'),
    mergeMap(() => {
      const config = {
        url: `${settings.mathProblemGenerate}/absolute_difference`,
        method: 'GET',
      };
      return from(axios(config)).pipe(
        map((response: AxiosResponse) => ({
          type: 'MATH_PROBLEM_GENERATOR_SUCCEEDED',
          payload: { response },
        })),
        catchError((error: AxiosError) =>
          of({
            type: 'MATH_PROBLEM_GENERATOR_FAILED',
            payload: { response: error },
            error: true,
          })
        )
      );
    })
  );


  const generateMathProblemAngeBTWVectorEpic: Epic = (action$) =>
  action$.pipe(
    ofType('ANGLE_BTW_VECTOR_REQUESTED'),
    mergeMap(() => {
      const config = {
        url: `${settings.mathProblemGenerate}/angle_btw_vectors`,
        method: 'GET',
      };
      return from(axios(config)).pipe(
        map((response: AxiosResponse) => ({
          type: 'MATH_PROBLEM_GENERATOR_SUCCEEDED',
          payload: { response },
        })),
        catchError((error: AxiosError) =>
          of({
            type: 'MATH_PROBLEM_GENERATOR_FAILED',
            payload: { response: error },
            error: true,
          })
        )
      );
    })
  );


  const generateMathProblemAngleRegularPolygonEpic: Epic = (action$) =>
  action$.pipe(
    ofType('ANGLE_REGULAR_POLYGON_REQUESTED'),
    mergeMap(() => {
      const config = {
        url: `${settings.mathProblemGenerate}/angle_regular_polygon`,
        method: 'GET',
      };
      return from(axios(config)).pipe(
        map((response: AxiosResponse) => ({
          type: 'MATH_PROBLEM_GENERATOR_SUCCEEDED',
          payload: { response },
        })),
        catchError((error: AxiosError) =>
          of({
            type: 'MATH_PROBLEM_GENERATOR_FAILED',
            payload: { response: error },
            error: true,
          })
        )
      );
    })
  );

  const generateMathProblemArcLengthEpic: Epic = (action$) =>
  action$.pipe(
    ofType('ARC_LENGTH_REQUESTED'),
    mergeMap(() => {
      const config = {
        url: `${settings.mathProblemGenerate}/arc_length`,
        method: 'GET',
      };
      return from(axios(config)).pipe(
        map((response: AxiosResponse) => ({
          type: 'MATH_PROBLEM_GENERATOR_SUCCEEDED',
          payload: { response },
        })),
        catchError((error: AxiosError) =>
          of({
            type: 'MATH_PROBLEM_GENERATOR_FAILED',
            payload: { response: error },
            error: true,
          })
        )
      );
    })
  );

  const generateMathProblemAreaOfCircleEpic: Epic = (action$) =>
  action$.pipe(
    ofType('AREA_OF_CIRCLE_REQUESTED'),
    mergeMap(() => {
      const config = {
        url: `${settings.mathProblemGenerate}/area_of_circle`,
        method: 'GET',
      };
      return from(axios(config)).pipe(
        map((response: AxiosResponse) => ({
          type: 'MATH_PROBLEM_GENERATOR_SUCCEEDED',
          payload: { response },
        })),
        catchError((error: AxiosError) =>
          of({
            type: 'MATH_PROBLEM_GENERATOR_FAILED',
            payload: { response: error },
            error: true,
          })
        )
      );
    })
  );

  const generateMathProblemAreaOfTriangleEpic: Epic = (action$) =>
  action$.pipe(
    ofType('AREA_OF_TRIANGLE_REQUESTED'),
    mergeMap(() => {
      const config = {
        url: `${settings.mathProblemGenerate}/area_of_triangle`,
        method: 'GET',
      };
      return from(axios(config)).pipe(
        map((response: AxiosResponse) => ({
          type: 'MATH_PROBLEM_GENERATOR_SUCCEEDED',
          payload: { response },
        })),
        catchError((error: AxiosError) =>
          of({
            type: 'MATH_PROBLEM_GENERATOR_FAILED',
            payload: { response: error },
            error: true,
          })
        )
      );
    })
  );

  const generateMathProblemAreaOfCircleGivenCenterEpic: Epic = (action$) =>
  action$.pipe(
    ofType('AREA_OF_CIRCLE_GIVEN_CENTER_REQUESTED'),
    mergeMap(() => {
      const config = {
        url: `${settings.mathProblemGenerate}/area_of_circle_given_center_and_point`,
        method: 'GET',
      };
      return from(axios(config)).pipe(
        map((response: AxiosResponse) => ({
          type: 'MATH_PROBLEM_GENERATOR_SUCCEEDED',
          payload: { response },
        })),
        catchError((error: AxiosError) =>
          of({
            type: 'MATH_PROBLEM_GENERATOR_FAILED',
            payload: { response: error },
            error: true,
          })
        )
      );
    })
  );

  const generateMathProblemArithemticProgressionSumEpic: Epic = (action$) =>
  action$.pipe(
    ofType('ARITHMETIC_PROGRESSION_SUM_REQUESTED'),
    mergeMap(() => {
      const config = {
        url: `${settings.mathProblemGenerate}/arithmetic_progression_sum`,
        method: 'GET',
      };
      return from(axios(config)).pipe(
        map((response: AxiosResponse) => ({
          type: 'MATH_PROBLEM_GENERATOR_SUCCEEDED',
          payload: { response },
        })),
        catchError((error: AxiosError) =>
          of({
            type: 'MATH_PROBLEM_GENERATOR_FAILED',
            payload: { response: error },
            error: true,
          })
        )
      );
    })
  );

  const generateMathProblemArithemticProgressionTermEpic: Epic = (action$) =>
  action$.pipe(
    ofType('ARITHMETIC_PROGRESSION_TERM_REQUESTED'),
    mergeMap(() => {
      const config = {
        url: `${settings.mathProblemGenerate}/arithmetic_progression_term`,
        method: 'GET',
      };
      return from(axios(config)).pipe(
        map((response: AxiosResponse) => ({
          type: 'MATH_PROBLEM_GENERATOR_SUCCEEDED',
          payload: { response },
        })),
        catchError((error: AxiosError) =>
          of({
            type: 'MATH_PROBLEM_GENERATOR_FAILED',
            payload: { response: error },
            error: true,
          })
        )
      );
    })
  );

  const generateMathProblemBaseConverionEpic: Epic = (action$) =>
  action$.pipe(
    ofType('BASE_CONVERSION_REQUESTED'),
    mergeMap(() => {
      const config = {
        url: `${settings.mathProblemGenerate}/base_conversion`,
        method: 'GET',
      };
      return from(axios(config)).pipe(
        map((response: AxiosResponse) => ({
          type: 'MATH_PROBLEM_GENERATOR_SUCCEEDED',
          payload: { response },
        })),
        catchError((error: AxiosError) =>
          of({
            type: 'MATH_PROBLEM_GENERATOR_FAILED',
            payload: { response: error },
            error: true,
          })
        )
      );
    })
  );

export default combineEpics(
  calculateAnswerEpic,
  generateMathProblemBasicAlgebraEpic,
  generateMathProblemAdditionEpic,
  generateMathProblemAbsoluteDifferenceEpic,
  generateMathProblemAngeBTWVectorEpic,
  generateMathProblemAngleRegularPolygonEpic,
  generateMathProblemArcLengthEpic,
  generateMathProblemAreaOfCircleEpic,
  generateMathProblemAreaOfCircleGivenCenterEpic,
  generateMathProblemArithemticProgressionSumEpic,
  generateMathProblemArithemticProgressionTermEpic,
  generateMathProblemBaseConverionEpic,
  generateMathProblemAreaOfTriangleEpic
);
