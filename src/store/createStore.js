import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../../../SpaceX-1-SSRApp/spacexReactSSR/src/client/reducers';

export default () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));
  return store;
};
