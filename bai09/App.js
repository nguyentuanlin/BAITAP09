import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OTPVerificationScreen from './OTPVerificationScreen'; // Import màn hình OTP
import HomeScreen from './HomeScreen'; // Import màn hình Home

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OTPVerificationScreen">
        <Stack.Screen name="OTPVerificationScreen" component={OTPVerificationScreen} options={{ title: 'OTP Verification' }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
