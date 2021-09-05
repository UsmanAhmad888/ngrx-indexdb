import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import AppState from './models/app-state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'ngrx-app';
  loading$!: Observable<Boolean>;

  constructor(private store: Store<AppState>) { 
    
  }

  ngOnInit(): void {
    this.loading$ = this.store.select(store => store.post.loading);
    console.log('loading',this.loading$);
  }
}
