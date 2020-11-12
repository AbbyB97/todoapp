import reqres from '../apis/reqres'

export const login = () => async (dispatch,getstate) => {
    const response = await reqres.post('/login', { email: "eve.holt@reqres.in", password: "cityslicka" });
    console.log("rsp",response.data);
    console.log('store',getstate());
    dispatch({ type: 'USER_LOGIN', payload: response.data });
}