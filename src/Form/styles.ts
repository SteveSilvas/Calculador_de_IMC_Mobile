import { StyleSheet } from "react-native";
import Colors from "../Utilities/Colors";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Colors.blue1,
        justifyContent:"center",
        padding:20
    },
    title: {
        fontSize: 30,
        color: "black",
        textAlign: "center",
        padding: 20,
        backgroundColor: Colors.purple
    },
    form: {
        display: "flex",
        alignItems: "center",
        backgroundColor: Colors.purple,
        paddingBottom:20
    },
    input: {
        backgroundColor: Colors.white,
        width: 300,
        borderRadius: 6,
        textAlign: "center",
    },
    button: {
        backgroundColor: Colors.green1,
        width: 300,
        padding: 10,
        borderRadius: 6,
        marginTop:20
    },
    buttonRefresh: {
        backgroundColor: Colors.green0,
        width: 300,
        padding: 10,
        borderRadius: 6,
        marginTop:20
    },
    buttonTitle: {
        fontSize: 20,
        color: Colors.black,
        textAlign: "center",
    },
});

export default styles;
