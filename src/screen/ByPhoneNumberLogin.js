import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import MainButton from '../UI/buttons/MainButton';
import SimpleHeader from '../UI/SimpleHeader';
import CustomInput from '../UI/inputs/CustomInput';

const ByPhoneNumberLogin = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <SimpleHeader title={'По номеру телефона '} />
      <View style={{marginTop: 10, alignItems: 'center'}}>
        <Image source={require('../assets/png/illustration.png')} />
      </View>

      <Text
        style={{
          color: '#000000',
          fontSize: 28,
          marginTop: 20,
          marginHorizontal: 30,
        }}>
        Вход
      </Text>
      <Text
        style={{
          fontSize: 16,
          marginHorizontal: 30,
          lineHeight: 24,
          marginTop: 15,
          color: '#000000',
          fontSize: 14,
        }}>
        Пожалуйста, введите свой номер телефона, 
мы пришлем вам проверочный код 
      </Text>
      <Text style={{fontSize:10, marginHorizontal:30, marginTop:35}}>Введите номер телефона<Text style={{color:'red', fontSize:10, marginLeft:-5}}>*</Text> </Text>
<View style={{marginHorizontal:30, marginBottom:120}}>
    <CustomInput/>
</View>

      <MainButton
        horizontal={30}
        label={'Далее'}
        background={'#F7F7F7'}
        color={'#72777A'}
	      action={() => {navigation.navigate("ByPhoneNumberLogin2")}}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#FFFFFF',
    minHeight: Dimensions.get('window').height - 100,
    height: '100%',
  },
});

export default ByPhoneNumberLogin;
