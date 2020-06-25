// React Files
import React from 'react';
import ReactDOM from 'react-dom';

// Redux Files
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';


// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Firebase + Redux Files
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

// User Files
import './index.css';
import App from './App';
import RootReducers from './Store/rootReducer';
import firebaseConfig from './Config/firebaseConfig';
import registerServiceWorker from './registerServiceWorker';


// Central Store
const store = createStore(RootReducers,

    // Compose is used to merge one or more Higher Order Component
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),

        // Passing the Firebase Config File to Method
        reduxFirestore(firebaseConfig),
        reactReduxFirebase(firebaseConfig)
    )
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

