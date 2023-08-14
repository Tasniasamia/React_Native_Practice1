import React from 'react';
import { View ,Text} from 'react-native';

const Card = ({indexdata}) => {
    return (
       <View style={{backgroundColor:"red",margin:5}}>
        <Text>{indexdata.name}</Text>
        <Text>{indexdata.Subtitle}</Text>
        </View>
    );
};

export default Card;
