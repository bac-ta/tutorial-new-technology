import authenticationService from "../../services/authentication-service";
import { call, fork, put, take } from '@redux-saga/core/effects';


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

function* handleLogout() {
    try{
        authenticationService.removeAccessToken();
    }
    catch (e: any){
        authenticationService.removeAccessToken();
    }
}

function* watchLoginFlow() {
    while(true){
        const isLoggedIn = Boolean(authenticationService.getAccessToken());
        if (isLoggedIn){

        }
    }
}
