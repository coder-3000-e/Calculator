import { applyMiddleware, combineReducers } from "redux";
import { CalculationStatus } from "./types";
import { composeWithDevTools } from "redux-devtools-extension";
import { legacy_createStore as createStore } from 'redux';
import reducer from "./reducer";

interface DefaultRootState { }
export type State = DefaultRootState & {
    calculations: CalculationStatus;
}

const composedEnhancer = composeWithDevTools(
    // Add whatever middleware you actually want to use here
    applyMiddleware()
    // other store enhancers if any
)

const rootReducer = combineReducers({
    // Define a top-level state field named `todos`, handled by `todosReducer`
    calculations: reducer,
})

export default rootReducer

export const store = createStore(rootReducer, composedEnhancer)
