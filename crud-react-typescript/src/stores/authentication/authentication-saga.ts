import authenticationService from "../../services/authentication-service";

function* handleLogin(payload: any): any {
    const {dataLogin} = payload;
    try {
        const loginResult = yield authenticationService.doLogin(dataLogin.username, dataLogin.password);
        if (!Boolean(loginResult.errorMessage)) {
            const data = loginResult.data;
            const accessToken = data.access_token;
            authenticationService.setAccessToken(accessToken)
            payload.loginSuccess();
        } else {
        }
    } catch (error) {
    }
}
