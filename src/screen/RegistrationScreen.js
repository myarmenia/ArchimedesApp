import * as React from "react";
import { Text, StyleSheet, View, Dimensions, Image, ScrollView } from "react-native";
import MainButton from '../UI/buttons/MainButton';
import SimpleHeader from '../UI/SimpleHeader';
import CustomInput from '../UI/inputs/CustomInput';
import CheckBox from '../UI/checkBox/CheckBox';

const RegistrationScreen = ({ navigation }) => {
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
        Регистрация
      </Text>
      <Text
        style={{
          fontSize: 16,
          marginHorizontal: 30,
          lineHeight: 24,
          marginTop: 15,
        }}
      >
        Пожалуйста, введите свой номер телефона, 
мы пришлем вам проверочный код 
      </Text>
<Text style={{fontSize:10, marginHorizontal:30, marginTop:35}}>Введите номер телефона<Text style={{color:'red', fontSize:10, marginLeft:-5}}>*</Text> </Text>
<View style={{marginHorizontal:30}}>
    <CustomInput/>
</View>
<CheckBox text={'Я соглашаюсь с политикой использования приложения'}/>
<View style={{marginBottom:115}}>
  <CheckBox text={'Я соглашаюсь с условиями обработки персональных данных'}/>
</View>
<MainButton horizontal={30} label={'Далее'} background={'#E0E0E0'} color={'#72777A'} action={() => navigation.navigate("ByPhoneNumber")}/>
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

export default RegistrationScreen;
