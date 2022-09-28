import React, {memo} from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import BackArrowSvg from '../assets/svg/BackArrowSvg';

const SimpleHeader = ({title, right}) => {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity >
          <View style={{marginRight: right ? right : 70}}>
            <BackArrowSvg />
          </View>
        </TouchableOpacity>
        <Text style={{fontSize: 16, color: '#646464'}}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderBottomColor: '#17181B',
  },
});

export default memo(SimpleHeader);
