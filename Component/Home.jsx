import React from "react";
import { Box, AspectRatio, Center, Image, Stack, Text, Heading, HStack } from 'native-base';
import { NativeBaseProvider } from 'native-base';

const Home = () => {
  return(
    <NativeBaseProvider>
    <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
      <Text>Open up App.js to start working on your app!</Text>
    </Box>
  </NativeBaseProvider>
  )
 
  
 

};
export default Home;