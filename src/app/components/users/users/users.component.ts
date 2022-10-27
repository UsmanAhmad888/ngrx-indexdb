import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import AppState from '../../../models/app-state.model';
import { DeleteUserAction, GetUsersAction, UpdateUserAction } from '../../../actions/users.actions';
import User from 'src/app/models/user.modal';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$!: Observable<Array<any>>;
  loading$!: Observable<Boolean>;
  error$!: Observable<Error>;
  users: any[] = [];
  user: User={
    id: 0,
    fName: '',
    lName: '',
    email: ''
  };

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.users$ = this.store.select(store => store.user.users);
    this.users$.subscribe(res => {
      console.log('users', res);
      this.users = res
    })

    this.error$ = this.store.select(store => store.user.error);
    this.store.dispatch(new GetUsersAction());
    this.users$.subscribe(res => {
      console.log('users', res);
    })
  }

  deleteUser(index: any) {
    this.store.dispatch(new DeleteUserAction(index));
  }
  updateUser(user: any) {
    this.store.dispatch(new UpdateUserAction(user));
  }

  edit(id: any) {
    let user = this.users.find(x => x.id == id);
    if (user) {
      this.user = {...user}
    }
  }

}
