export enum SessionActionTypes {
    USER_SIGN_IN = 'USER_SIGN_IN',
    USER_SIGN_OUT = 'USER_SIGN_OUT',
}

export interface IUsers {
    _id: string;
    username: string;
    email: string;
    phone: number;
}

export interface IUserSignInPayload {
    login: string,
    password: string,
}

export interface IUserSignInAction {
    type: SessionActionTypes.USER_SIGN_IN;
    payload: IUserSignInPayload;
}

export interface IUserSignOutAction {
    type: SessionActionTypes.USER_SIGN_OUT;
}

// export interface UserState {
//     users: IUsers[];
//     dataCount: number;
//     loading: boolean;
//     error: null | string;
// }