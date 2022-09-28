import * as React from 'react';
import {Text, StyleSheet, View, ScrollView, Dimensions} from 'react-native';
import SimpleHeader from '../UI/SimpleHeader';
import PhoneIconSvg from '../assets/svg/PhoneIconSvg';

const ConnectWithUs = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <SimpleHeader title={'Связаться с нами'} />
      <View style={{marginLeft: 70}}>
        <PhoneIconSvg />
      </View>
      <Text
        style={{
          fontSize: 24,
          textAlign: 'center',
          color: '#000000',
          fontWeight: 'bold',
        }}>
        Обратная связь
      </Text>
      <Text
        style={{
          marginHorizontal: 30,
          fontSize: 14,
          color: '#000000',
          lineHeight: 24,
          textAlign: 'center',
          marginTop: 15,
        }}>
        Ваше обращение будет рассмотрено в течение суток. Спасибо, что
        обратились к нам!
      </Text>
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

export default ConnectWithUs;
