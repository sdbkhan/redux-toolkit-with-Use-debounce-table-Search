import { combineReducers, configureStore ,MiddlewareArray} from '@reduxjs/toolkit'
import { userSlice } from './userSlice/userSlice'
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import { thunk } from 'redux-thunk';
import {registerSlice} from './RegisterSlice/registerSlice';
import {apiSlice} from './apiSlice/apiSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({ 
    user: userSlice.reducer,
    register:registerSlice.reducer,
    apireducer:apiSlice.reducer
  })

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

export const persistor = persistStore(store);


// below
// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import userReducer from './userSlice';
// import otherReducer from './otherSlice';

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, userReducer);

// const rootReducer = combineReducers({
//   user: persistedReducer,
//   other: otherReducer,
// });

// export const store = configureStore({
//   reducer: rootReducer,
// }); 