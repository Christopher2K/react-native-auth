import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import Firebase from 'firebase';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '' , loading: true });

        Firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSucess.bind(this))
            .catch(() => {
                // Try to register the user on login fail
                Firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSucess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginSucess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    onLoginFail() {
        this.setState({
            error: 'Authentication failed',
            loading: false 
        });
    }
        
    renderButton () {
        if (this.state.loading) {
            return <Spinner size="small" />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                        placeholder="Bruce.wayne@wayne.com"
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        secureTextEntry
                        label="Password"
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                        placeholder="password"
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        marginTop: 5,
        marginBottom: 5,
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;