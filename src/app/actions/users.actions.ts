import { Action } from '@ngrx/store';
import User from '../models/user.modal';


export enum UserActionTypes {
    ADD_USER = '[USER] Add USER',
    ADD_USER_SUCCESS = '[USER] Add User Success',
    ADD_USER_FAIL = '[USER] Add User Fail',
    
    GET_USERS = '[USER] Get Users',
    GET_USERS_SUCCESS = '[USER] Get Users Success',
    GET_USERS_FAIL = '[USER] Get Users Fail',

    DELETE_USER = '[USER] Delete User',
    DELETE_USER_SUCCESS = '[USER] Delete User Success',
    DELETE_USER_FAIL = '[USER] Delete User Fail',

    UPDATE_USER = '[USER] Update User',
    UPDATE_USER_SUCCESS = '[USER] Update User Success',
    UPDATE_USER_FAIL = '[USER] Update User Fail',
}


export class GetUsersAction implements Action {
    readonly type = UserActionTypes.GET_USERS;
}

export class GetUsersSuccessAction implements Action {
    readonly type = UserActionTypes.GET_USERS_SUCCESS;
    constructor(public payload: Array<any>){}
}

export class GetUsersFailAction implements Action {
    readonly type = UserActionTypes.GET_USERS_FAIL;
    constructor(public payload: any) {}
}



// users
export class AddUserAction implements Action {
    readonly type = UserActionTypes.ADD_USER;
    constructor(public payload: User){}
}

export class AddUserSuccessAction implements Action {
    readonly type = UserActionTypes.ADD_USER_SUCCESS;
    constructor(public payload: User){}
}

export class AddUserFailAction implements Action {
    readonly type = UserActionTypes.ADD_USER_FAIL;
    constructor(public payload: any){}
}

/*
** Delete User
**/
export class DeleteUserAction implements Action {
    readonly type = UserActionTypes.DELETE_USER;
    constructor(public payload: number){}
}

export class DeleteUserSuccessAction implements Action {
    readonly type = UserActionTypes.DELETE_USER_SUCCESS;
    constructor(public payload: string | any){}
}

export class DeleteUserFailAction implements Action {
    readonly type = UserActionTypes.DELETE_USER_FAIL;
    constructor(public payload: any){}
}

// update user

export class UpdateUserAction implements Action {
    readonly type = UserActionTypes.UPDATE_USER;
    constructor(public payload: any){}
}

export class UpdateUserSuccessAction implements Action {
    readonly type = UserActionTypes.UPDATE_USER_SUCCESS;
    constructor(public payload: string | any){}
}

export class UpdateUserFailAction implements Action {
    readonly type = UserActionTypes.UPDATE_USER_FAIL;
    constructor(public payload: any){}
}

/*
** End - Delete Post
**/

export type UserAction = 
    AddUserAction | 
    AddUserSuccessAction |
    AddUserFailAction |
    DeleteUserAction |
    DeleteUserSuccessAction |
    DeleteUserFailAction |
    GetUsersAction |
    GetUsersSuccessAction |
    GetUsersFailAction |
    UpdateUserAction |
    UpdateUserSuccessAction |
    UpdateUserFailAction;