import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import MainButton from '../UI/buttons/MainButton';

const WelcomeScreen = ({navigation}) => {
  const goToNextPage = () => {
    console.log('mta');
    navigation.navigate('AuthorizationScreen');
  };
  return (
    <ScrollView style={styles.container}>
      <View style={{marginTop: 70, width: Dimensions.get('screen').width - 60, height: 280, backgroundColor: '#F5F5F5', borderRadius: 45}} />
      <Text
        style={{
          color: '#000000',
          fontSize: 28,
          marginTop: 45,
        }}>
        Добро пожаловать!
      </Text>
      <Text
        style={{
          fontSize: 16,
          lineHeight: 24,
          marginTop: 15,
        }}>
        Вы уже пользовались приложением АрхиМед раньше?
      </Text>
      <View style={{marginTop: 30}}>
        <MainButton
          label={'Я новый пользователь'}
          action={() => goToNextPage()}
        />
      </View>
      <View style={{marginTop: 17}}>
        <MainButton
          label={'У меня есть аккаунт '}
          action={() => navigation.navigate('LoginScreen')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#FFFFFF',
    minHeight: Dimensions.get('window').height - 100,
    height: '100%',
    paddingHorizontal: 30,
  },
});

export default WelcomeScreen;
