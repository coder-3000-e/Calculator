import { Epic, ofType } from 'redux-observable';
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

export default calculateAnswerEpic;
