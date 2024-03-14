import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountScreen from "../screens/AccountScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import ListingScreen from "../screens/ListingScreen";
import feedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Feed" component={feedNavigator} />
        <Tab.Screen name="ListingEdit" component={ListingEditScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
)

export default AppNavigator;