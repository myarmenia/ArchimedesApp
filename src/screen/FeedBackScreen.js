import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Dimensions
} from 'react-native';
import MainButton from '../UI/buttons/MainButton';
import SimpleHeader from '../UI/SimpleHeader';
import TextAreaSvg from '../assets/svg/TextAreaSvg'

const FeedBackScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <SimpleHeader title={'Связаться с нами'} />
      <Text style={{fontSize: 24, marginHorizontal: 30, color:'#000000', fontWeight:'bold'}}>Обратная связь</Text>
      <Text
        style={{
          fontSize: 16,
          marginHorizontal: 30,
          lineHeight: 24,
          marginTop: 15,
          color: '#000000',
          fontSize: 14,
        }}>
        Для того, чтобы мы могли помочь Вам с решением проблемы, заполните
        данные ниже и подробно опишите возникшую проблему
      </Text>

      <View style={{marginLeft:30, marginTop:20, marginBottom:30}}>
      <TextAreaSvg/>
      </View>
      <MainButton
        horizontal={30}
        label={'Отправить'}
        background={'#F7F7F7'}
        color={'#72777A'}
        action={() => navigation.navigate("ConnectWithUs")}
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

export default FeedBackScreen;
