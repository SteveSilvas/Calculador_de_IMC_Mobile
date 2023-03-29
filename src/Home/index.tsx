import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Form from '../Form';
import Restult from '../Result';
import BMIType from '../@Types/BMIType';

const Home = () => {
    const [showForm, setShowForm] = useState<boolean>(true);
    const [bmi, setBMI] = useState<BMIType>({
        height: 0,
        weight: 0,
        result: 0
    });

    const onCalculateHandler = (bmi: BMIType): void => {
        setShowForm(false);
        setBMI(bmi);
    }

    return (
        <View style={{ flex: 1, width: "100%", marginTop: 20, backgroundColor: "#c3c3c3" }}>
            <Form
                visible={showForm}
                onCalculate={onCalculateHandler}
            />
            <Restult
                visible={!showForm}
                bmi={bmi}
                onCloseResult={() => setShowForm(true)}
            />
        </View>
    )
}

export default Home;