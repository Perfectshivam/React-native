import { combineReducers,createStore } from "redux";
import { AppReducer } from "./Reducers/AppReducer";
import { CartReducer } from "./Reducers/CartReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const AllReducers={
    app:AppReducer,
    cart:CartReducer,
}

const persistConfig={
    key:"RNTraning",
    storage:AsyncStorage,
    whitelist:["app"]
}

const mergedReducer=combineReducers(AllReducers)
const persistedReducer=persistReducer(persistConfig,mergedReducer);

export const store=createStore(persistedReducer)
export const persistor=persistStore(store)
