import React, { Component } from 'react'
import { View, Text } from 'react-desktop/windows';

export default class Home extends Component {
    render() {
        return (

            <View layout="vertical">
                <Text><h1>Home</h1></Text>
                <Text>You can enter everything here</Text>

            </View>
        )
    }
}
