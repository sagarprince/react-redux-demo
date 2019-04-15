import { createStore, applyMiddleware, compose, Middleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './root-reducer';

function configureStore(initialState?: {}) {
    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const logger = createLogger()
    const middlewares: Middleware[] = [
        thunk,
        logger
    ];
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(...middlewares))
    );
}

const store = configureStore();

export default store;