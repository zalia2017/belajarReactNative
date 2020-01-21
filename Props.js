import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Bananas extends Component {
    render () {
        let pic = { 
            uri : "https://zalia.id"
        };
        return (
            <Image source={pic} style={{width: 193, height: 110}}/>
        );
    }
}