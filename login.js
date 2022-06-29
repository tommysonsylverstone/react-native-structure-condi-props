import React from "react";
import { TextInput, View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Profile from "./Profile";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            pwd: '',
            loginU: '',
            loginP: ''
        }
    }

    handleUsername = (username) => {
        this.setState({ username: username });
    }

    handlePassword = (pwd) => {
        this.setState({ pwd: pwd });
    }

    handleSubmit = (username, pwd) => {
        this.setState({loginU: username, loginP: pwd});
    }

    render() {
        return (
            <>
                <View>
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Username"
                        placeholderTextColor="#9a73ef"
                        autoCapitalize="none"
                        onChangeText={this.handleUsername} />
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Password"
                        placeholderTextColor="#9a73ef"
                        autoCapitalize="none"
                        secureTextEntry={true}
                        onChangeText={this.handlePassword} />
                    <TouchableOpacity style={styles.submitButton}
                        onPress={() => this.handleSubmit(this.state.username, this.state.pwd)}>
                        <Text style={styles.submitButtonText}> Valider </Text>
                    </TouchableOpacity>
                </View>
                <Profile name={this.state.loginU} pwd={this.state.loginP} />
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    }
})