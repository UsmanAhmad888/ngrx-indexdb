import { Component, Input, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import AppState from '../../../models/app-state.model';
import {AddUserAction, UpdateUserAction, UserAction} from '../../../actions/users.actions';
import User from 'src/app/models/user.modal';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  @Input() user: User = {
    id: 0,
    fName: '',
    lName: '',
    email: ''
  }

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void { 
  }

  createUser(){
    // this.user.id = Math.floor(Math.random() * 10);
    console.log("add user component",this.user);
    if(!this.user.id){

      this.store.dispatch(new AddUserAction({...this.user}));
    }else{
      console.log("updating user",this.user);
      
      this.store.dispatch(new UpdateUserAction({...this.user}));
    }
    this.user.fName = '';
    this.user.lName = '';
    this.user.email = '';
  }

  clear(){
    this.user={
      id: 0,
      fName: '',
      lName: '',
      email: ''
    }
  }

}
