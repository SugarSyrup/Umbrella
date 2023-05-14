export const LOGIN = "LOGIN" as const;
export const LOGOUT = "LOGOUT" as const;

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
        type: LOGOUT,
    }
}