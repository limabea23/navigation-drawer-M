import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./navigation/DrawerNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <Stack />
        </NavigationContainer>
    );
}