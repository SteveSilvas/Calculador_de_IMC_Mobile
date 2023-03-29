import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles';
import Button from '../Button';
import BMIType from '../@Types/BMIType';
import BMITable from '../BMITable';

interface ResultProps {
    visible: boolean;
    bmi: BMIType;
    onCloseResult: () => void;
}

const Restult: React.FC<ResultProps> = ({ visible, bmi, onCloseResult }) => {
    return visible ? (
        <View style={styles.root}>
            <View style={styles.panel}>

                <Text style={styles.title}>O seu IMC está {String(bmi.result).slice(0, 4)}</Text>
                <Text style={styles.message}>Altura: {bmi.height}</Text>
                <Text style={styles.message}>Peso: {bmi.weight}</Text>

                <BMITable bmi={bmi.result} />
                <Button
                    title='Fechar'
                    buttonStyle={styles.button}
                    titleStyle={styles.buttonTitle}
                    onClick={onCloseResult}
                />
            </View>
        </View>
    ) : <></>
}

export default Restult;