import {IUserSignInPayload, SessionActionTypes} from "state/concepts/session/types";

export const userSignIn = (data: IUserSignInPayload) => ({
    type: SessionActionTypes.USER_SIGN_IN,
    data,
});

export const userSignOut = () => ({
    type: SessionActionTypes.USER_SIGN_OUT,
});