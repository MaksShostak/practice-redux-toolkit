import { addUserType, deleteUserType } from './userType';

export const addUser = user => ({ type: addUserType, payload: user });

export const deleteUser = user => ({ type: deleteUserType, payload: user });
