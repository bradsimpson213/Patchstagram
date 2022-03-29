import { users } from '../data'

const GET_USERS = 'users/GET_USERS';

// ACTIONS
export const getUsers = () => {
    return {
        type: GET_USERS,
        users
    };
};


const initialState = {};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, users: [...action.users] };
        default:
            return state;
  }
};

export default userReducer;