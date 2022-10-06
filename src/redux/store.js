import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import reducer from './users/userReducer';
export const store = createStore(reducer, devToolsEnhancer());
console.log(store.getState());
