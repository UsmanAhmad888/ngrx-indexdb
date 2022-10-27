import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import AppState from '../../../models/app-state.model';
import { DeleteUserAction, GetUsersAction } from '../../../actions/users.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$!: Observable<Array<any>>;
  loading$!: Observable<Boolean>;
  error$!: Observable<Error>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.users$ = this.store.select(store => store.user.users);
    this.users$.subscribe(res => {
      console.log('users', res);
    })

    this.error$ = this.store.select(store => store.user.error);
    this.store.dispatch(new GetUsersAction());
    this.users$.subscribe(res => {
      console.log('users', res);
    })
  }

  deletePost(index: any) {
    this.store.dispatch(new DeleteUserAction(index));
  }

}
