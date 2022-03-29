import { posts } from '../data'

const GET_POSTS = 'posts/GET_POSTS';
const ADD_POST = 'posts/ADD_POST';

// ACTIONS
export const getPosts = () => {
    return {
        type: GET_POSTS,
        posts
    };
};

export const addPost = (newPost) => {
    return {
        type: ADD_POST,
        newPost,
    }    
}


const initialState = { posts };

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return { ...state, posts: [...action.posts] };
        case ADD_POST:
            return { ...state, posts: [ action.newPost, ...state.posts]}
        default:
            return state;
  }
};

export default postReducer;