import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import db from '../config.js';
export class LoginScreen extends React.Component{
    render(){
        return(
            <View>
                <TextInput 
                placeholder='emailId'
                />
                <TextInput
                placeholder='password'
                secureTextEntry='true'
                />
                <TouchableOpacity>
                    <Text>
                        login
                    </Text>
                </TouchableOpacity>
            </View>

        )
    }
}