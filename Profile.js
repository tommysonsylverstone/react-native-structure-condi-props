import React from "react";
import { Text } from "react-native";
export default class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Text>Bienvenue</Text>
                {this.props.pwd === "admin"
                    ? <Text>Bienvenue {this.props.name}</Text>
                    : <Text>Mauvais mot de passe</Text>}

            </>
        )
    }
} 