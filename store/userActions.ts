export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export type userDataType = {
    nick_name : string,
}

export function loginAction(userData: userDataType) {
    return {
        type: LOGIN,
        payload: userData,
    };
}

export function logoutAction() {
    return {
        type: LOGOUT
    }
}