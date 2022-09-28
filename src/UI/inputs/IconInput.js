import { StyleSheet, TextInput, View, Platform } from "react-native";
import ProfileIconSvg from '../../assets/svg/ProfileIconSvg'



const IconInput = ({
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
        style={[styles.input, { textAlign: align ? align : "left", color:'#7B9E45'}]}
        placeholder={placeholder ? placeholder : "+7( ___ ) ___  - __  - __   "}
        {...restProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor:'rgba(157, 196, 88, 0.1)',
    marginBottom: 10,
    marginTop: 5,
    fontSize: 16,
    paddingVertical: 3,
    paddingLeft: 15,
    borderRadius: 15,
    height: Platform.OS === 'android' ? 60 : 60,
  },
});

export default IconInput;
