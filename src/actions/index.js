import reqres from '../apis/reqres'

export const login = () => async (dispatch,getstate) => {
    const response = await reqres.post('/login', { email: "eve.holt@reqres.in", password: "cityslicka" });
    dispatch({ type: 'USER_LOGIN', payload: response.data });
}