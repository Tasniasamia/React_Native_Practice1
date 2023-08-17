import React from 'react';
import {View,Text} from 'react-native';

const Menu =({navigation}) => {

    return (
        <View >
            <Text>Home {navigation.navigate('Home')}</Text>
            <Text>Details {navigation.navigate('Details')}</Text>

        </View>
    );
};

export default Menu;
