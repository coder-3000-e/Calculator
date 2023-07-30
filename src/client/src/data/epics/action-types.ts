import { AxiosError, AxiosResponse } from 'axios'
import { ErrorAction, PayloadAction } from './types';

export type CalculateRequestedAction = PayloadAction<
'CALCULATION_REQUESTED',
{
    calculation: string;
}
>;

export type CalculateSucceededAction= PayloadAction<'CALCULATION_SUCCEEDED',{
    response: AxiosResponse;
}>;

export type CalculateFailureAction = ErrorAction<
'CALCULATION_FAILED',
{ response: AxiosError}>