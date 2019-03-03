const initialState = {
    callform: {
        numberInput: '+4799999999',
        buttonDisabled: false,
    },
    phoneScreen: {
        status: 'connected',
    },    
}

// Actions
const UPDATE_NUMBERINPUT = 'UPDATE_NUMBERINPUT';
const UPDATE_PHONESCREEN_STATUS = 'UPDATE_PHONESCREEN_STATUS';
const INITIATE_CALL = 'INITIATE_CALL';

// Action creators
export function updateNumberinput({number}) {
    return {
        type: UPDATE_NUMBERINPUT,
        number,
    }
};

export function updatePhonescreenStatus({status}) {
    return {
        type: UPDATE_PHONESCREEN_STATUS,
        status,
    }
};

export function initiateCall({number}) {
    return {
        type: INITIATE_CALL,
        number,
    }
};

// Reducer
function rootReducer(state = initialState, action = {}) {
    return state;
}

export default rootReducer;
