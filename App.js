import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from "react-native";
import Cover from "./Cover";

export default function App() {
  return <Cover />;
}

const styles = StyleSheet.create({
  SafeView: {
    backgroundColor: "white", // Add flex: 1 to SafeAreaView to make it take up the entire screen
  },
});
