import React from 'react';
import {View,Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const DetailsScreen =( { navigation }) => {

    const handledata=()=>{
        navigation.navigate("Home")
    }
    return (
        <View >
            <Text>DetailsScreen</Text>
            <Button onPress={handledata} title="Go Home"/>
            
       
        </View>
    );
};

export default DetailsScreen;
