import { UserAction, UserActionTypes } from '../actions/users.actions';
import { users } from '../mock/users';

export interface UserState {
    users: Array<any>,
    loading: boolean,
    error: string | any
}

const initialState: UserState = {
    users: [],
    loading: false,
    error: ""
}

export function UsersReducer(state: UserState = initialState, action: UserAction): UserState {
    switch (action.type) {

        case UserActionTypes.ADD_USER:
            return {
                ...state,
                loading: true
            }
        case UserActionTypes.ADD_USER_SUCCESS:
            return {
                ...state,
                users: [action.payload, ...state.users],
                loading: false
            }
        case UserActionTypes.ADD_USER_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        case UserActionTypes.DELETE_USER:
            return {
                ...state,
                loading: true
            }
        case UserActionTypes.DELETE_USER_SUCCESS: {
            let updatedPosts = [...state.users];
            // let index=updatedPosts.findIndex(x=>x.id==action.payload)
            // updatedPosts.splice(index, 1);
            return {
                ...state,
                users: updatedPosts,
                loading: false
            };
        }
        case UserActionTypes.DELETE_USER_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case UserActionTypes.GET_USERS:
            return {
                ...state,
                loading: true
            }
        case UserActionTypes.GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case UserActionTypes.GET_USERS_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}