import React from 'react';
import {View,Text, Button} from 'react-native';

const HomeScreen =({navigation}) => {

const handledata=()=>{
    navigation.navigate("Details")
}
    return (
        <View >
            
            <Text>HomeScreen </Text>
            <Button onPress={handledata} title="Details"/>
       
        </View>
    );
};

export default HomeScreen;
