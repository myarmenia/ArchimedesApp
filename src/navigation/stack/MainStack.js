import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import StatusBar from '../../screen/StatusBar';
import HomeScreen from '../../screen/HomeScreen';
import WelcomeScreen from '../../screen/WelcomeScreen';
import AuthorizationScreen from '../../screen/AuthorizationScreen';
import RegistrationScreen from '../../screen/RegistrationScreen';
import ByPhoneNumber from '../../screen/ByPhoneNumber';
import FeedBackScreen from '../../screen/FeedBackScreen';
import ConnectWithUs from '../../screen/ConnectWithUs';
import LoginScreen from '../../screen/LoginScreen';
import ByPhoneNumberLogin from '../../screen/ByPhoneNumberLogin';
import ByPhoneNumberLogin2 from '../../screen/ByPhoneNumberLogin2';
import ByPhoneNumberLoginActive from '../../screen/ByPhoneNumberLoginActive';

const Stack = createStackNavigator();

export const MainStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    {/* <Stack.Screen name={"StatusBar "} component={StatusBar} /> */}
    <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
    <Stack.Screen name={'WelcomeScreen'} component={WelcomeScreen} />
    <Stack.Screen
      name={'AuthorizationScreen'}
      component={AuthorizationScreen}
    />
    <Stack.Screen name={'RegistrationScreen'} component={RegistrationScreen} />
    <Stack.Screen name={'ByPhoneNumber'} component={ByPhoneNumber} />
    <Stack.Screen name={'FeedBackScreen'} component={FeedBackScreen} />
    <Stack.Screen name={'ConnectWithUs'} component={ConnectWithUs} />
    <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
    <Stack.Screen name={'ByPhoneNumberLogin'} component={ByPhoneNumberLogin} />
    <Stack.Screen
      name={'ByPhoneNumberLogin2'}
      component={ByPhoneNumberLogin2}
    />
    <Stack.Screen
      name={'ByPhoneNumberLoginActive'}
      component={ByPhoneNumberLoginActive}
    />
  </Stack.Navigator>
);
