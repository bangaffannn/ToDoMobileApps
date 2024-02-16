import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function Cover() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your Course Goal!'></TextInput>
        <Button title="Add Goal"></Button>
      </View>
      <View>
        <Text style={{padding: 10}}>List of Goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    padding: 10
  }
});
