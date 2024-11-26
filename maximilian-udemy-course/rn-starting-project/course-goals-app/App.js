import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function App() {
  const [newGoal, setNewGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const handleAddGoal = () => setGoals([...goals, newGoal]);

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course goal!"
          onChangeText={(text) => setNewGoal(text)}
        />
        <Button title="Add Goal" onPress={handleAddGoal} />
      </View>

      <View style={styles.goalsContainer}>
        {goals.map((goal, i) => (
          <Text style={styles.singleGoal} key={i}>
            {goal}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  goalsContainer: {
    marginTop: 20,
  },
  singleGoal: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
});
