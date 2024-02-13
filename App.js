import React from "react";
import { 
  Text,
  View
} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {

  return (
    <MessagesScreen />
  );
}