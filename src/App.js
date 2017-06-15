import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore} from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import Router from './Router';

class App extends Component {
    componentWillMount(){
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyD__jLdrOdypFN6REhwuk9fBP834O_s0wY",
            authDomain: "manager-d34a7.firebaseapp.com",
            databaseURL: "https://manager-d34a7.firebaseio.com",
            projectId: "manager-d34a7",
            storageBucket: "manager-d34a7.appspot.com",
            messagingSenderId: "1003609696962"
        };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;