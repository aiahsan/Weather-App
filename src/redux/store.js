import {createStore,applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
const middleWares=[logger];

export const store=createStore(rootReducer,applyMiddleware(...middleWares));
export const perssistor=persistStore(store);
const myStore={store,perssistor}
export default myStore;
