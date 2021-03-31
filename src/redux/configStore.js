import {applyMiddleware, combineReducers,createStore} from 'redux';
import reduxThunk from 'redux-thunk';
import MenuReducer from './reducers/MenuReducer';
const rootReducer = combineReducers({
    MenuReducer,
    
});
// apply thunk để xử lí dispatch api
export const store = createStore(rootReducer,applyMiddleware(reduxThunk));