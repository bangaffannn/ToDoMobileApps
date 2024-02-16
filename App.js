import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";
import Cover from "./test/src/Cover";

export default function App() {
  return (
    <SafeAreaView style={styles.SafeView}>
      <Cover />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeView: {
    backgroundColor: "white",
    flex: 1, // Add flex: 1 to SafeAreaView to make it take up the entire screen
  },
});
