// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
    switch (action.type) {
        case 'CREATE_TASK':
            return [...state,action.payload];
        default:
            return state;
    }
};