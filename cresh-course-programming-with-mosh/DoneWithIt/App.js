import { useDeviceOrientation } from "@react-native-community/hooks";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableNativeFeedback,
  View,
  TouchableOpacity,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  const handleTextPress = () => console.log("Hello");
  const orientation = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: orientation === "landscape" ? "100%" : "30%",
        }}
      />

      <Text onPress={handleTextPress}>Hello World!</Text>
      {/* works only on Android */}
      <TouchableNativeFeedback>
        <View
          style={{
            backgroundColor: "dodgerblue",
            padding: 10,
            borderRadius: 5,
            marginTop: 10,
          }}
        >
          <Text style={{ color: "white" }}>Press me!</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableOpacity>
        <Image
          source={{
            uri: "https://picsum.photos/200/300",
            width: 200,
            height: 300,
          }}
        />
      </TouchableOpacity>

      <Button
        title="Click me"
        onPress={() =>
          Alert.alert("Title", "Clicked!", alertButtons, { cancelable: false })
        }
      />
    </SafeAreaView>
  );
}

const alertButtons = [
  {
    text: "Button One",
    onPress: () => console.log("Clicked, form alert button"),
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBlockStart: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
});
