import React from "react";
import { useState } from "react";
import GoalItem from "./components/GoalItem.jsx";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function Cover() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      // enteredGoalText,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {/* <ScrollView>
          {courseGoals.map((goal, index) => (
            <View style={styles.goalItem} key={index}>
              <Text style={styles.textColor}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
{/* YOU USE THE FLATLIST WHEN YOU HAVE TO OUTPUT DYNAMIC AND LIST LONG DATA */}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem text={itemData.item.text} />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 3, // Adjusted flex value to fill the remaining space
  },
});
