import { View, Text, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import Button from '../Button';
import getNumbers from '../Utilities/Functions'
import BMIType from '../@Types/BMIType';

interface FormProps {
    visible: boolean;
    onCalculate: (bmi: BMIType) => void;
}

const Form: React.FC<FormProps> = ({ visible, onCalculate }) => {
    const [height, setHeight] = useState<number>(0);
    const [weight, setWeight] = useState<number>(0);

    const handleChangeHeight = (value: string): void => {
        value = value.replace(",", ".");
        setHeight(getNumbers(value));
    }

    const handleChangeWeight = (value: string): void => {
        value = value.replace(",", ".");
        setWeight(getNumbers(value));
    }

    const handleCalculate = (): void => {
        if (checkFields()) {
            let bmi: number = weight / (height * height);
            onCalculate({
                height: height,
                weight: weight,
                result: bmi
            });
        }
        else {
            Alert.alert("preencha todos os campos")
        }
    }
    const checkFields = (): boolean => {
        return height != 0 && weight != 0;
    }

    const handleClean = (): void => {
        setHeight(0);
        setWeight(0);
    }

    return visible ? (
        <View style={styles.root}>
            <Text style={styles.title}>Calcular o IMC</Text>
            <View style={styles.form}>
                <Text>Altura:</Text>
                <TextInput
                    value={(String(height))}
                    style={styles.input}
                    keyboardType='numeric'
                    onChangeText={handleChangeHeight}
                    placeholder='1.65'
                />
                <Text>Peso:</Text>
                <TextInput
                    value={(String(weight))}
                    style={styles.input}
                    keyboardType='numeric'
                    onChangeText={handleChangeWeight}
                    placeholder='60.5'
                />

                <Button
                    buttonStyle={styles.button}
                    titleStyle={styles.buttonTitle}
                    title='Calcular'
                    onClick={handleCalculate}
                />
                <Button
                    buttonStyle={styles.buttonRefresh}
                    titleStyle={styles.buttonTitle}
                    title='Limpar'
                    onClick={handleClean}
                />
            </View>
        </View>
    ) : <></>
}

export default Form