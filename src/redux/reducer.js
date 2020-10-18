const initialState = {
    perPage: 10
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_PERPAGE': {
            return {
                ...state,
                perPage: action.payload
            }
        }
        default :
            return state

    }

};

export { reducer };