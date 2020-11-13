/* eslint-disable import/no-anonymous-default-export */
export default (state = {}, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return action.payload;
         case 'USER_LOGOUT':
            return {};
        default:
            return state;
    }
};