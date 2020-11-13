import reqres from '../apis/reqres'

export const login = (email) => async (dispatch, getstate) => {
    const response = await reqres.post('/login', { email: "eve.holt@reqres.in", password: "cityslicka" });
    dispatch({
        type: 'USER_LOGIN',
        payload: {
            token: response.data,
            email : email
        }
    });
}


export const logout = () => {
    return {
        type: 'USER_LOGOUT',
    }
}


export const createTask = (taskName, description, tag, branchTo, date, subTask) => {
    return {
        type: 'CREATE_TASK',
        payload: {
            taskName,
            description,
            tag,
            branchTo,
            date,
            subTask: [subTask]
        }
    }
}