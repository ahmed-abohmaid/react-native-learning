import { StyleSheet, Text, SafeAreaView, Image, TouchableNativeFeedback, View, TouchableOpacity } from 'react-native';

export default function App() {
  const handleTextPress = () => console.log("Hello");

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handleTextPress}>Hello World!</Text>
      {/* works only on Android */}
      <TouchableNativeFeedback> 
        <View style={{
          backgroundColor: "dodgerblue",
          padding: 10,
          borderRadius: 5,
          marginTop: 10,
        }}>
          <Text style={{ color: "white", }}>Press me!</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableOpacity>
        <Image source={{
          uri: "https://picsum.photos/200/300",
          width: 200,
          height: 300
        }} />
      </TouchableOpacity>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
  },
});
