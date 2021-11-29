import {makeHttpCalling} from "../helpers/apis/call-api";
import {ACCESS_TOKEN_KEY} from "../helpers/apis/constant";

const getAccessToken = () => {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
}

const setAccessToken = (value: string) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, value);
}

const removeAccessToken = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
}

const doLogin = async (username: string, password: string) => {
    let formData = new FormData()
    let data: any = {}
    let errorMessage: String = ''

    formData.append('username', username)
    formData.append('password', password)
    await makeHttpCalling({
        url: '/auth/login',
        method: 'POST',
        data: formData
    }).then(response => {
        data = response.data;
    }).catch(error => {
        errorMessage = error.response.data.message
    });
    return {
        data,
        errorMessage
    }
}
const authenticationService = {
    getAccessToken,
    setAccessToken,
    removeAccessToken,
    doLogin
}
export default authenticationService;
