import React from "react";
import { 
  Dimensions, 
  StyleSheet, 
  Text, 
  TouchableHighlight, 
  StatusBar, 
  View, 
  Alert, 
  Image, 
  SafeAreaView, 
  Button, 
  Platform 
} from 'react-native';

export default function App() {
  const handlePress = () => console.log("text pressed")

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: "50%",
        height: 70
    }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, 
  },
});
