import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    };

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
                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;