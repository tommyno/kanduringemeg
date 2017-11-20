import {createStore, compose, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';

import rootReducer from './ducks/application';

const logger = createLogger();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(logger),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;

