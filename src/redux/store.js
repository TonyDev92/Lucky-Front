import { legacy_createStore as createStore , applyMiddleware , combineReducers } from "redux";
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from "./reducers/auth.reducer";
import animalesFiltradosReducer from "./reducers/filter.reducer";
const reducer = combineReducers({
    auth: authReducer,
    animalesFiltrados: animalesFiltradosReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;