import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { users } from '../mock/users';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Store } from '@ngrx/store';
import AppState from '../models/app-state.model';
import { GetUsersAction } from '../actions/users.actions';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usrs: { id: number; fName: string; lName: string; email: string; }[]=[]

  constructor(
    private dbService: NgxIndexedDBService,
    private store:Store<AppState>
    ) {
    this.usrs=[...users]
   }

  getUsers() {
   return  this.dbService.getAll('users')
  }
  
  addUser(user: any){
    return this.dbService
    .add('users', {
      fName: user.fName,
      lName: user.lName,
      email: user.email,
    }).
    pipe(map((key) => {
      this.store.dispatch(new GetUsersAction());
      return key
    }));
  }

  deleteUser(id: any){
   return  this.dbService.delete('users', id).pipe(map((allusers) => {
      this.store.dispatch(new GetUsersAction());
      return id;
    }));
   
  }

  updateUser(user: any){
   return  this.dbService.update('users', user).pipe(map((allusers) => {
      this.store.dispatch(new GetUsersAction());
      return user;
    }));
   
  }
}
