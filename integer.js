import React from "react";
import { Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default class Integer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { a: 0 }
        this.handleA = this.handleA.bind(this);
    }

    handleA(a) {
        let newA = parseInt(a)
        this.setState({ a: newA })
    }

    handleSubmit(a) {
        if (a % 2 === 0)
            alert(a);
        if (a.toString().length === 3) {
            let aString = a.toString();
            let total = 0;
            for (let i = 0; i < aString.length; i++) {
                total += aString[i]
            }
            if (total % 3 === 0) console.log('ok');
        }
    }

    render() {
        return (
            <>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Votre premier nombre"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleA}
                />
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => this.handleSubmit(this.state.a)}>
                    <Text style={styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
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