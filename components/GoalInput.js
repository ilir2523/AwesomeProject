import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('');

    function goalInputHandler(text) {
        setEnteredGoal(text);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require('../assets/dart-board.png')} style={{ width: 100, height: 100, marginBottom: 20 }} />
                <TextInput
                    placeholder="Course Goal"
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer} >
                    <Button title="CANCEL" color="#f31282" onPress={props.onCancel} />
                    <Button title="ADD Goal" color="#b180f0" onPress={addGoalHandler} />
                </View>
            </View>
        </Modal >
    )
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#1e085a',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        borderRadius: 8,
        backgroundColor: '#e4d0ff',
        width: '100%',
        padding: 16,
        color: '#120438',
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
    },
});