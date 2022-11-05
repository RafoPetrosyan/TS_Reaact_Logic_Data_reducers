import endpoint from 'utils/endpoint';
import {SessionActionTypes} from 'state/concepts/session/types';

export const signInUserEndpoint = endpoint(SessionActionTypes.USER_SIGN_IN, '/user/sign-in-admin');