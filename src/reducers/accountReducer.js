import { LOGIN_SUCCESS } from '../actions/accountActions';

const INITIAL_STATE = {
    user: null
}
const states = {};

const accountReducer = (state = INITIAL_STATE, action) => {
    
    states[LOGIN_SUCCESS] = {
        ...state,
        user: action?.payload?.user || {...state.user} 
    }

    return states[action.type] || state;
}

export default accountReducer;