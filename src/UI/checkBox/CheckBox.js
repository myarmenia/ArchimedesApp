import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {faSquare, faSquareCheck} from '@fortawesome/free-regular-svg-icons';
// import {CheckBox} from 'react-native-elements';

const MyComponent = ({text, goTo, checked, setChecked}) => {
  return (
    <View style={styles.container}>
    </View>
//      <CheckBox
//       checked={checked}
//        onPress={() => {
//          setChecked(!checked);
//        }}
//        checkedIcon={
//          <FontAwesomeIcon
//            icon={faSquareCheck}
//            border
//            color={'white'}
//            size={24}
//          />
//        }
//        uncheckedIcon={
//          <FontAwesomeIcon icon={faSquare} border color={'#9DC458'} size={15} />
//        }
//      />
//      <TouchableOpacity
//        onPress={() => {
//          if (goTo) {
//            goTo();
//          }
//        }}>
//        <Text style={{color: '#5F6368', fontSize: 10}}>{text}</Text>
//      </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop:-15
  },
});
export default MyComponent;
