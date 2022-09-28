import { StyleSheet, Text, TouchableOpacity} from "react-native";

const MainButton = (props) => {
    return (
       <TouchableOpacity onPress={() => props.action()} style={[styles.btn, {backgroundColor: props.background ? props.background : "#F2FBE2",
           paddingVertical: props.vertical ? props.vertical : 0, 
           marginHorizontal: props.horizontal ? props.horizontal : 0,
       }]}>
		<Text style={{textAlign:'center', padding:16, fontSize: props.size ? props.size : 18, color: props.color ? props.color : "#7B9E45"}}>
			{props.label}
		</Text>
	</TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        borderRadius: 15,
        marginHorizontal:15,
        shadowOpacity: Platform.OS === "ios" ? 0.4 : 0,  

    }
});

export default MainButton;