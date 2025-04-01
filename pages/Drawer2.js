import React from "react"; 
import { View, Text } from "react-native"; 

export default function Drawer2() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Look at the stars
Look how they shine for you
And everything you do
Yeah, they were all yellow
I came along
I wrote a song for you
And all the things you do
And it was called "Yellow"
So then I took my turn
Oh, what a thing to have done
And it was all yellow
your skin, oh yeah, your skin and bones
(Ooh) turn into something beautiful
(Aah) and you know, you know I love you so
You know I love you so
I swam across
I jumped across for you
Oh, what a thing to do
'Cause you were all yellow
I drew a line
I drew a line for you
Oh, what a thing to do
And it was all yellow
and your skin, oh yeah, your skin and bones
(Ooh) turn into something beautiful
(Aah) and you know, for you, I'd bleed myself dry
For you, I'd bleed myself dry
It's true
Look how they shine for you
Look how they shine for you
Look how they shine for-
Look how they shine for you
Look how they shine for you
Look how they shine
Look at the stars
Look how they shine for you
And all the things that you do</Text>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "grey", 
    },
    title: {
        fontSize: 15, 
    },
};