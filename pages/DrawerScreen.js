import React from "react";
import { View, Text } from "react-native";

export default function DrawerScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Yellow is an Coldplay song</Text>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightyellow",
    },
    title: {
        fontSize: 30,
    },
};