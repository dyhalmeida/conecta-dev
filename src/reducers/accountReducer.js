import { LOGIN_SUCCESS, SILENT_LOGIN } from '../actions/accountActions';

const INITIAL_STATE = {
    user: null
}
const states = {};

const accountReducer = (state = INITIAL_STATE, action) => {
    
    states[LOGIN_SUCCESS] = {
        ...state,
        user: action?.payload?.user || {...state.user} 
    }

    states[SILENT_LOGIN] = {
        ...state,
        user: action?.payload?.user || {...state.user} 
    }

    return states[action.type] || state;
}

export default accountReducer;