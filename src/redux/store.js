import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";
import { persistStore } from 'redux-persist';

const sagaMiddleWare = createSagaMiddleware();
const middleWares = [logger, sagaMiddleWare];

const store = createStore(rootReducer, applyMiddleware(...middleWares));
sagaMiddleWare.run(rootSaga)

const persistor = persistStore(store);

export { store, persistor };