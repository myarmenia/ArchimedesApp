import * as React from "react";
import { Text, StyleSheet, View, Dimensions, Image, ScrollView } from "react-native";
import CallIconButton from '../UI/buttons/CallIconButton';
import AppleIconButton from '../UI/buttons/AppleIconButton';
import SimpleHeader from '../UI/SimpleHeader'

const LoginScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
    <SimpleHeader/>
      <View style={{ marginTop: 10, alignItems: "center" }}>
        <Image source={require("../assets/png/illustration.png")} />
      </View>

      <Text
        style={{
          color: "#000000",
          fontSize: 28,
          marginTop: 45,
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
          color:'#000000'
        }}
      >
        Чтобы войти в аккаунт выберите способ авторизации 
      </Text>
      <View style={{marginTop:30, marginHorizontal:30}}>
      <CallIconButton label={'По номеру телефона'} color={'#FFFFFF'} action={() => navigation.navigate("ByPhoneNumberLogin")} />
      </View>
      <View style={{marginTop:17, marginHorizontal:30}}>
        <AppleIconButton label={'Продолжить с Apple'} color={'#FFFFFF'}/>
      </View>
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

export default LoginScreen;
