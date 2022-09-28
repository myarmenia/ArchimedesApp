import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";

const DrawerContent = (props) => {
  return (
    <View style={styles.background}>
      <DrawerContentScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}
        {...props}
      >
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  label: {
    color: "#000",
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 5,
    marginBottom: 50,
  },
  footerLabel: {
    fontSize: 15,
    color: "#fff",
    marginTop: 5,
  },
});

export default DrawerContent;
