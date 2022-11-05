import { combineReducers } from "redux";

import {IUserSignInAction, IUserSignOutAction, SessionActionTypes} from "state/concepts/session/types";
import Account from "lib/account";

type CurrentUserActions = IUserSignInAction | IUserSignOutAction;

const currentUser = (state = Account.getAccount(), action: CurrentUserActions) => {
    switch (action.type) {
        case SessionActionTypes.USER_SIGN_IN:
            return action.payload;
        case SessionActionTypes.USER_SIGN_OUT:
            return null;
        default:
            return state;
    }
};

const sessionReducer = combineReducers({
    currentUser,
});

export default sessionReducer;