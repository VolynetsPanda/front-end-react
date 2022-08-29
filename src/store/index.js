import reducerUser from "store/storeUser";
import {combineReducers, createStore} from "redux";
import reducerCounter from "modules/counter/reducer";

const allReducer = combineReducers({
    count: reducerCounter,
    users: reducerUser
})

const store = createStore(allReducer)
export default store;
