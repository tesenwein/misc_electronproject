import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { View, Text, Button } from 'react-desktop/windows';

export default class Campains extends Component {

    constructor(props) {
        super(props)

        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        this.props.history.push('/campaigns/new')
    }

    render() {
        return (
            <div>
                <View>
                    <Text><h1>Campaigns</h1></Text>
                </View>
                <View horizontalAlignment="right">
                    <Button onClick={this.onClick}>New Campaign</Button>
                </View>
            </div>
        )
    }
}
