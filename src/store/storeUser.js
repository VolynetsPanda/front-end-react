const defaultState = {
    users: []
}

const reducerUser = (state = defaultState, action) => {
    switch (action.type){
        case 'ADD_USER':
            return {...state, users: [...state.users, ...action.payload]}
        case 'REMOVE_USER':
            return {...state, users: state.users.filter(el => el.name !== action.payload)}
        default:
            return state
    }
}

export default reducerUser
