import uiReducer from './uiReducers';
import authReducer from './authReducer';
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';


const rootReducer = combineReducers({

    // User Reducers
    authReducer: authReducer,
    ui: uiReducer,

    // Firebase Reducers
    firestore: firestoreReducer, // This brings firestore data into reducer
    firebase: firebaseReducer // This takes firebase data into a reducer like Auth
});

export default rootReducer;
