import React from 'react';
import {View,Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const HomeScreen =({ navigation }) => {

const handledata=()=>{
    navigation.navigate("Details");
    
}
console.log(navigation)
    return (
        <View >
            
            <Text>HomeScreen </Text>
            <Button onPress={handledata} title="Details"/>
       
        </View>
    );
};

export default HomeScreen;
