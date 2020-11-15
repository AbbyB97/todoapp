// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
    switch (action.type) {
        case 'CREATE_TASK':
            return [...state, action.payload];
        case 'UPDATE_TASKS':
            console.log("update task reducer");
            return action.payload;
        case 'USER_LOGOUT':
            return [];
        default:
            return state;
    }
};