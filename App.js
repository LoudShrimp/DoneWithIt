import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  const handlePress = () => console.log("text pressed")

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>Hello world</Text>
      <TouchableHighlight onPress={() => console.log("image tapped")}>
        <Image source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300"}} 
        />
      </TouchableHighlight>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
