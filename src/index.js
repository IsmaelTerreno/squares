import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.scss';
import App from './layout/App';
import registerServiceWorker from './registerServiceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEllipsisV,
  faFilter,
  faSort,
  faArrowLeft,
  faSave,
  faImages,
  faTrashAlt,
  faPlay
} from '@fortawesome/free-solid-svg-icons';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './ducks/app/app.reducer';

const middleware = [ thunk ];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

library.add(faEllipsisV);
library.add(faFilter);
library.add(faSort);
library.add(faArrowLeft);
library.add(faSave);
library.add(faImages);
library.add(faTrashAlt);
library.add(faPlay);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
