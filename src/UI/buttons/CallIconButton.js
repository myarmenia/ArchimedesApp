import { StyleSheet, Text, TouchableOpacity, View} from "react-native";
import ButtonCallSvg from '../../assets/svg/ButtonCallSvg'

const IconButton = (props) => {
    return(
       <TouchableOpacity onPress={props.action}  style={[styles.btn, {backgroundColor: props.background ? props.background : "#9DC458",
           paddingVertical: props.vertical ? props.vertical : 0, 
           marginHorizontal: props.horizontal ? props.horizontal : 0,
       }]}>
       <View>
           <ButtonCallSvg/>
       </View>
       <Text style={{ textAlign:'center', padding:20, fontSize: props.size ? props.size : 18,  color: props.color ? props.color : "#7B9E45"}}>{props.label}
       </Text>

       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        borderRadius: 15,
        marginHorizontal:15,
        shadowOpacity: Platform.OS === "ios" ? 0.4 : 0,  
        alignItems:'center', 
        justifyContent:'center',
        flexDirection:'row'
    }
});

export default IconButton;