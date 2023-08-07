import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import reducer from './reducer';
import calculateAnswerEpic from './epics';
import thunk from 'redux-thunk';
import { CalculatorStatus } from './types';

interface DefaultRootState { }
export type State = DefaultRootState & {
    calculations: CalculatorStatus;
}

const epicMiddleware = createEpicMiddleware();

const middleware = [thunk, epicMiddleware];

const composedEnhancer = composeWithDevTools(applyMiddleware(...middleware));

const rootReducer = combineReducers({
  calculations: reducer,
});

const store = createStore(rootReducer, composedEnhancer);

const rootEpic = combineEpics(calculateAnswerEpic);

epicMiddleware.run(rootEpic);

export default store;
