import React, { Component } from 'react';
import { View } from 'react-native';
import Firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/loginForm';

class App extends Component {

    componentWillMount() {
        Firebase.initializeApp({
            apiKey: 'AIzaSyC9Paf72HLrgwwv1_pKaT5EtXMbbpEAnx0',
            authDomain: 'auth-react-native-fabad.firebaseapp.com',
            databaseURL: 'https://auth-react-native-fabad.firebaseio.com',
            projectId: 'auth-react-native-fabad',
            storageBucket: 'auth-react-native-fabad.appspot.com',
            messagingSenderId: '261318109506'
        });
    }


    render() {
        return (
            <View>
                <Header title='Authentication' />
                <LoginForm />
            </View>
        );
    }
}

export default App;