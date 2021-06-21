import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {AuthReducer} from "../features/reducers";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}
export const saveState = (state: object) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    throw new Error("Can't save changes in local storage")
  }
}

export const store = configureStore({
  reducer: {
    AuthReducer
  },
  preloadedState: loadState(),
});

store.subscribe(() =>
    saveState({
      AuthReducer: store.getState().AuthReducer,
    })
)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
