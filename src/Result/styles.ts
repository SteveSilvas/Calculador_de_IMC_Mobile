import { StyleSheet } from "react-native";
import Colors from "../Utilities/Colors";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        width: "100%",
        backgroundColor: Colors.blue1,
        padding: 20
    },
    panel: {
        display: "flex",
        alignItems: "center",
        borderColor: Colors.green1,
        borderWidth:3,
        borderRadius: 10,
        padding:10,
        backgroundColor: Colors.white
    },
    title:{
        fontSize: 30,
        color: Colors.black,
        textAlign: "center",
        padding: 20,
    },
    message: {
        fontSize: 20,
        color: Colors.black,
        textAlign: "center",
    },
    button: {
        backgroundColor: Colors.green1,
        width: 300,
        padding: 10,
        borderRadius: 6,
        marginTop: 20,
    },
  
    buttonTitle: {
        fontSize: 20,
        color: Colors.black,
        textAlign: "center",
    },
});

export default styles;
