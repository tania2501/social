import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { addMessage, dialogReducer, changeMessage } from './dialog-reducer';
import { addPost, profileReducer, setUserProfile, updateTextValue } from './profile-reducer';
import { sidebarReducer } from './sidebar-reducer';
import { follow, setCurrentPage, setTotalCount, setUsers, toggleIsFetching, unfollow, usersReducer } from './users-reducer';
import { loginReducer, setAuthUserData } from './login-reducer';

export type AppDispatch = typeof store.dispatch
export type ActionsTypes = ReturnType<typeof addPost> | ReturnType<typeof updateTextValue> | ReturnType<typeof addMessage> | ReturnType<typeof changeMessage> | ReturnType<typeof follow> | ReturnType<typeof unfollow> | ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalCount> | ReturnType<typeof toggleIsFetching> | ReturnType<typeof setUserProfile> | ReturnType<typeof setAuthUserData>

export type StateType = ReturnType<typeof store.getState>

export const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
  auth: loginReducer
})

export const store = configureStore({reducer: rootReducer});

//@ts-ignore
window.store = store;
