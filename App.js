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
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

export default function App() {
  const orientation = useDeviceOrientation();

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: "100%",
        height: orientation === "landscape" ? "100%" : "30%",
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
