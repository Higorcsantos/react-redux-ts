import {createStore , applyMiddleware , Store} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './ducks/rootReducer';
import {RepositoriesState} from './ducks/repositories/types'
import rootSaga from './ducks/rootSaga'

export interface ApplicationState{
    repositories: RepositoriesState,
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;