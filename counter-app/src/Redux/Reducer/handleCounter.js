
let parentState = {
    initialState: 0,
    step: 1,
    max: null
}

const changeTheNumber = (state = {...parentState}, action) => {
    switch (action.type) {
        case "STEP":
            state.step = action.step === state.step ? 1 : action.step
            return { ...state, visibilityFilter: action.filter }
        case "MAX":
            state.max = action.max === state.max ? null : action.max
            return { ...state, visibilityFilter: action.filter }
        case "INC":
            if (state.initialState + state.step >= state.max&&state.max) return state;
            state.initialState = state.initialState + state.step;
            return { ...state, visibilityFilter: action.filter }
        case "DEC":
            if (state.initialState - state.step < 0) return state;
            state.initialState = state.initialState - state.step;
            return { ...state, visibilityFilter: action.filter }
        case "RESET":
            state.initialState = 0;
            return { ...state, visibilityFilter: action.filter }
        default: return state
    }
}

export default changeTheNumber