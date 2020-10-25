import rootReducer from './reducers/rootReducer'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export function configureStore(){
    const store = createStore(rootReducer,
        composeEnhancer(applyMiddleware(thunk))
    )
    return store
}