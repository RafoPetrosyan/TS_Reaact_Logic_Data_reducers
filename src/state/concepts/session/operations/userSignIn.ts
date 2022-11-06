import { createLogic } from 'redux-logic';

import {IUserSignInAction, SessionActionTypes} from "state/concepts/session/types";
import { signInUserEndpoint } from "state/concepts/session/endpoints";
// import {dataApiFailure, dataApiRequest, dataApiSuccess} from "state/data/actions";
import { IHttpClient } from 'state/types';

import history from "utils/browserHistory";

import Account from "lib/account";

interface IProcess {
    action: IUserSignInAction,
    httpClient: any,
}

const userSignIn = createLogic({
    type: SessionActionTypes.USER_SIGN_IN,
    latest: true,

    async process({ action, httpClient }: IProcess, dispatch, done) {
        const { endpoint, url } = signInUserEndpoint;

        // dispatch(dataApiRequest({ endpoint }));

        const body = {
            username: action.payload.login,
            password: action.payload.password,
        };

        try {
            const { data: { user, token } } = await httpClient.post(url, body);
            // dispatch(dataApiSuccess({ endpoint }));

            Account.setAccessToken(token);
            Account.setAccount(user);

            history.replace('/');

            // dispatch(makeAction(USER_SIGN_IN_SUCCESS, user));

        }catch (e){
            // dispatch(dataApiFailure({ endpoint, response: e.response.data.message }));
            console.log(e)
        }
        done();
    },
});

export default userSignIn;