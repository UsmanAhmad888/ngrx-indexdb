import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import {
        UserActionTypes, 
        GetUsersAction,
        GetUsersSuccessAction,
        GetUsersFailAction,
        DeleteUserAction,
        DeleteUserSuccessAction,
        DeleteUserFailAction,
        AddUserAction,
        AddUserSuccessAction,
        AddUserFailAction
     } from '../actions/users.actions';
import { UsersService } from '../services/users.service';

@Injectable()
export class UserEffects {

  getUsers$ =   createEffect(() =>this.actions$
    .pipe(
      ofType<GetUsersAction>(UserActionTypes.GET_USERS),
      mergeMap(
        () => this.service.getUsers()
          .pipe(
            map(data => {
              console.log('data',data);
                return new GetUsersSuccessAction(data)
            }),
            catchError(error => of(new GetUsersFailAction(error)))
          )
      ),
  )
  )

  deleteUser$ =  createEffect(() =>this.actions$
    .pipe(
      ofType<DeleteUserAction>(UserActionTypes.DELETE_USER),
      mergeMap(
        (data) => this.service.deleteUser(data.payload)
          .pipe(
            map(data2 => {
                return new DeleteUserSuccessAction(data.payload)
            }),
            catchError(error => of(new DeleteUserFailAction(error)))
          )
      ),
  )
  )

   addUser$ =   createEffect(() =>this.actions$
    .pipe(
      ofType<AddUserAction>(UserActionTypes.ADD_USER),
      mergeMap(
        (data) => this.service.addUser(data.payload)
          .pipe(
            map(data2 => {
                return new AddUserSuccessAction(data.payload)
            }),
            catchError(error => of(new AddUserFailAction(error)))
          )
      ),
  )
   )

  constructor(
    private actions$: Actions,
    private service: UsersService
  ) { }
}