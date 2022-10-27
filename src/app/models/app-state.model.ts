import { ActionReducerMap } from '@ngrx/store';
import { UsersReducer, UserState } from '../reducers/users.reducer';


export const rootReducer = {};

export default interface AppState {
    user:UserState;
}

export const reducers: ActionReducerMap<AppState, any> = {
    user:UsersReducer
};
