const initialState = { count: 0};

function counterReducer(state, action){
    switch(action.type){
        case 'increment':
            return {
                ...state, count: state.count + 1
            }
        case 'decrement':
            return {
                ...state, count: state.count - 1
            }
        case 'incrementByAmount':
            return {
                count: state.count + action.payload
            }
        case 'decrementByAmount':
            return {
                count: state.count - action.payload
            }
        default:
            return state;
    }
}

export {counterReducer, initialState}