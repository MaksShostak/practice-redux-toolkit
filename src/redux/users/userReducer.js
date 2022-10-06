import { addUserType, deleteUserType } from './userType';

const initialState = {
  users: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === addUserType) {
    return { users: [...state.users, action.payload] };
  }
  if (action.type === deleteUserType) {
    return { users: state.users.filter(user => user.mail !== action.payload) };
  }
  return state;
};
export default reducer;
