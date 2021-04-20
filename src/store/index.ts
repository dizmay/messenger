import createSagaMiddleware from 'redux-saga';
import rootSaga from '../actions';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { rootReducer } from '../reducers';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const sagaMiddleware = createSagaMiddleware()
// export const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(sagaMiddleware),
//     // @ts-ignore
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// )
export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
  // @ts-ignore
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

sagaMiddleware.run(rootSaga);