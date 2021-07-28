
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class facebook extends React.Component{
    render(){
        return(
            <View  style ={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text style = {{fontSize:60,fontFamily:'cursive', color:'red',backgroundColor:'yellow'}}>Facebook</Text>
            </View>
        );
    }
}