import { StyleSheet, View, Text, Pressable, Modal } from "react-native";

function GoalItem(props) {
    function deleteGoalHandler() {
        props.onDeleteItem(props.id);
    }

    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: '#36167c' }}
                onPress={deleteGoalHandler}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable >
        </View >
    )
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        backgroundColor: '#5e0acc',
        borderRadius: 4,
    },
    goalText: {
        color: 'white',
        padding: 8,
    },
    pressedItem: {
        opacity: 0.5,
    },
});