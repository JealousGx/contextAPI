const numReducer = (state, action) => {
    switch (action.value) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
    }
}

export default numReducer;