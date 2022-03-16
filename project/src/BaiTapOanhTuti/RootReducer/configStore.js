import { combineReducers, createStore } from "redux";
import {BaiTapReducer} from './BaiTapReducer'


const rootReducer = combineReducers({
    BaiTapReducer
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)