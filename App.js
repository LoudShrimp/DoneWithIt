import React from "react";
import { 
  Text,
  View
} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon"
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListItem from "./app/components/ListItem";

export default function App() {

  return (
    <Screen>
      <ListItem 
        title="my title" 
        subTitle="my subtitle"
        ImageComponent={<Icon name="email"/>} />
    </Screen>
  );
}