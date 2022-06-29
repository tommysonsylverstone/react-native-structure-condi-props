import React from "react";
import { Text } from "react-native";
export default class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text>Bienvenue {this.props.name ? this.props.name : "Anonyme"}</Text>
        )
    }
} 