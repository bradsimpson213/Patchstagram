// import { users } from '../data'

const GET_USERS = 'users/GET_USERS';
const SET_CURRENT = 'users/SET_CURRENT';

// ACTIONS
export const getUsers = (users) => {
    return {
        type: GET_USERS,
        users
    };
};

export const setCurrentUser = (currentUser) => {
    return {
        type: SET_CURRENT,
        currentUser
    }
};


// THUNKS
export const get_all_users = () => async (dispatch) => {
    const response = await fetch("/users/all")
    if(response.ok){
        const { users } = await response.json();
        dispatch(getUsers(users))
    } else {
        console.log("There was an error getting all users!")
    }
};

const initialState = {};


const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_USERS:
            return { 
                ...state, 
                users: [...action.users] };
        case SET_CURRENT:
            return { ...state, currentUser: action.currentUser }
        default:
            return state;
  }
};

export default userReducer;