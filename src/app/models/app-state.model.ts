import Post from './post.model';
import { PostState,PostsReducer } from '../reducers/posts.reducer';
import { ActionReducerMap } from '@ngrx/store';


export const rootReducer = {};

export default interface AppState {
    post: PostState;
}

export const reducers: ActionReducerMap<AppState, any> = {
    post: PostsReducer
};

// StoreModule.forRoot({
//     post: PostsReducer
//   }, {}),