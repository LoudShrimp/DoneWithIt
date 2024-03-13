import React, { useEffect, useState } from "react";
import Screen from "./app/components/Screen";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import ImageInput from "./app/components/ImageInput";
import { Button, Image } from "react-native";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}