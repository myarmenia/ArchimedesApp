import { StyleSheet, TextInput, View, Platform } from "react-native";
const CustomInput = ({
  placeholder,
  horizontal,
  bottom,
  elevation,
  align,
  width,
  height,
  onChangeText = () => {},
  value,
  ...restProps
}) => {
  return (
    <View
      style={[
        styles.parent,
        { marginHorizontal: horizontal ? horizontal : 0 },
        { marginBottom: bottom ? bottom : 30 },
        { elevation: elevation ? elevation : 0 },
        { width: width ? width : "100%" },
      ]}
    >
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={[styles.input, { textAlign: align ? align : "left"}]}
        placeholder={placeholder ? placeholder : "+7( ___ ) ___  - __  - __   "}
        {...restProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
      backgroundColor:'#F6F6F6',
    marginBottom: 10,
    marginTop: 5,
    fontSize: 16,
    paddingVertical: 3,
    paddingLeft: 15,
    borderRadius: 15,
    height: Platform.OS === 'android' ? 60 : 60,
  },
});

export default CustomInput;
