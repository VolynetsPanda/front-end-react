import {ADD_COUNT, REMOVE_COUNT} from "./type";

const defaultState = {
    count: 0
}

const reducerCounter = (state = defaultState, action) => {
    switch (action.type){
        case ADD_COUNT:
            return {...state, count: state.count + action.payload}
        case REMOVE_COUNT:
            return {...state, count: state.count - action.payload}
        default:
            return state
    }
}
export const addCountAction = (payload) => ({type: ADD_COUNT, payload})
export default reducerCounter
