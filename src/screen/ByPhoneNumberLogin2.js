import * as React from "react";
import { Text, StyleSheet, View, Dimensions, Image, ScrollView } from "react-native";
import MainButton from '../UI/buttons/MainButton';
import SimpleHeader from '../UI/SimpleHeader';
import CodeSvgMobile from '../assets/svg/CodeSvgMobile';
import ClockSvg from '../assets/svg/ClockSvg'

const ByPhoneNumber2 = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
    <SimpleHeader title={'По номеру телефона '}/>
      <View style={{ marginTop: 10, alignItems: "center"}}>
        <Image source={require("../assets/png/illustration.png")} />
      </View>

      <Text
        style={{
          color: "#000000",
          fontSize: 28,
          marginTop: 20,
          marginHorizontal: 30,
        }}
      >
        Вход
      </Text>
      <Text
        style={{
          fontSize: 16,
          marginHorizontal: 30,
          lineHeight: 24,
          marginTop: 15,
          color:'#000000',
          fontSize:14
        }}
      >
       Код отправлен на номер +7 (999) 999-99-99
      </Text>
<View style={{flexDirection:'row', marginHorizontal:30, marginTop:16}}>
<View style={{marginRight:10}}>
  <CodeSvgMobile/>
</View><View style={{marginRight:10}}>
  <CodeSvgMobile/>
</View><View style={{marginRight:10}}>
  <CodeSvgMobile/>
</View>
  <CodeSvgMobile/>
</View>
<Text style={{fontSize:12, color:'#2F80ED', marginHorizontal:30, marginTop:18, marginBottom:13}}>
Не получили код?
</Text>
<View style={{marginHorizontal:30, flexDirection:'row',
  alignItems:'center', marginBottom:165 }}>
  <Text style={{fontSize:14, marginRight:15, color:'#000000'}}>
    Отправить код повторно:
  </Text>
  <ClockSvg/>
</View>

<MainButton horizontal={30} label={'Подтвердить и войти в аккаунт'} background={'#F7F7F7'} color={'#72777A'}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: "#FFFFFF",
    minHeight: Dimensions.get("window").height - 100,
    height: "100%",
  },
});

export default ByPhoneNumber2;
