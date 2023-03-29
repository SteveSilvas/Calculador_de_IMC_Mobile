import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Colors from '../Utilities/Colors';

interface BMITableProps {
    bmi: number;
}

const BMITable: React.FC<BMITableProps> = ({ bmi }) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text>Abaixo do peso: IMC {'<'} 18,5</Text>
            </View>
            <View style={styles.row}>
                <Text>Peso normal: 18,5 {'=>'} IMC {'<'} 25</Text>
            </View>
            <View style={styles.row}>
                <Text>Sobrepeso: 25 {'=>'} IMC {'<'} 30</Text>
            </View>
            <View style={styles.row}>
                <Text>Obesidade grau 1: 30 {'=>'} IMC {'<'} 35</Text>
            </View>
            <View style={styles.row}>
                <Text>Obesidade grau 2: 35  {'=>'} IMC {'<'} 40</Text>
            </View>
            <View style={styles.row}>
                <Text>Obesidade grau 3: IMC  {'=>'} 40</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.green1,
        width: 300,
    },
    row: {
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomColor: Colors.green1,
        borderBottomWidth: 1
    }
})

export default BMITable