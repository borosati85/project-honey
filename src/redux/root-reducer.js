import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import shopReducer from './shop/shop-reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const rootPersistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"],
    stateReconciler: autoMergeLevel2
  };
  
  const userPersistConfig = {
    key: "user",
    storage,
    whitelist: ["existingUsers"],
    stateReconciler: autoMergeLevel2
  };
  
  const rootReducer = combineReducers({
    user: persistReducer(userPersistConfig, userReducer),
    cart: cartReducer,
    shop: shopReducer
  });
  
  export default persistReducer(rootPersistConfig, rootReducer);