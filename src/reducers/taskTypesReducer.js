/* eslint-disable import/no-anonymous-default-export */

export default (state = ['Personal','Official','Miscellaneous'],action)=>{
    switch(action.type){
        case 'UPDATE_SHOW_LIST':
            return action.payload;
        default:
            return state;
    }

}