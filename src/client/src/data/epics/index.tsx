import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { combineEpics, Epic, ofType } from 'redux-observable';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CalculateFailureAction, CalculateRequestedAction, CalculateSucceededAction } from './action-types';
import settings from '../settings';

const calculateAnswerEpic: Epic = (action$) =>
  action$.pipe(
    ofType<CalculateRequestedAction, any>('CALCULATION_REQUESTED'),
    map((action) => action.payload.calculation),
    map((calculation) => {
      const config: AxiosRequestConfig = {
        url: `${settings.calculatorRoot}/api/v1/Calculator/calculate`,
        method: 'POST',
        params: { value: calculation },
      };

      return axios(config).then(
        (response: AxiosResponse): CalculateSucceededAction => ({
          type: 'CALCULATION_SUCCEEDED',
          payload: { response },
        })
      );
    }),
    catchError((error: AxiosError): Observable<CalculateFailureAction> =>
      of({
        type: 'CALCULATION_FAILED',
        payload: { response: error },
        error: true,
      })
    )
  );

export default combineEpics(calculateAnswerEpic);
