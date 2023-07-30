import { Action } from 'redux';

export type PayloadAction<Type, Payload> = Action<Type> & {
    readonly payload: Payload;
}

export type ErrorAction<Type, payload> = Action<Type> & { readonly error: boolean }
    & PayloadAction<Type, payload>