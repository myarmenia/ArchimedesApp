import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import HomeLogoSvg from '../assets/svg/HomeLogoSvg';
import HomeNameSvg from '../assets/svg/HomeNameSvg';

const HomeScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('WelcomeScreen');
    }, 1000);
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={{marginTop: 300, marginBottom: 100}}>
        <HomeLogoSvg />
      </View>
      <View style={{marginTop: 20, marginBottom: 350}}>
        <HomeNameSvg />
      </View>
    </View>
  );
};

export default HomeScreen;
