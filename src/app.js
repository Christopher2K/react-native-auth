import React, { Component } from 'react';
import { View } from 'react-native';
import Firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/loginForm';

class App extends Component {
    state = {
        loggedIn: null
    }

    componentWillMount() {
        Firebase.initializeApp({
            apiKey: 'AIzaSyC9Paf72HLrgwwv1_pKaT5EtXMbbpEAnx0',
            authDomain: 'auth-react-native-fabad.firebaseapp.com',
            databaseURL: 'https://auth-react-native-fabad.firebaseio.com',
            projectId: 'auth-react-native-fabad',
            storageBucket: 'auth-react-native-fabad.appspot.com',
            messagingSenderId: '261318109506'
        });

        Firebase.auth().onAuthStateChanged((user) => {
            this.setState({ loggedIn: !!(user) });
        });
    }

    logOut() {
        Firebase.auth().signOut();
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button
                        style={styles.buttonStyle}
                        onPress={() => Firebase.auth().signOut()}
                        style={styles.logOutStyle}>
                        Log Out
                    </Button>
                );
            case false: 
                return <LoginForm />;
            default:
                return (
                    <View style={styles.spinnerStyle}>
                        <Spinner size="large" />
                    </View>
                );
        }
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Header title='Authentication' />
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    buttonStyle: {
        
    },
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default App;