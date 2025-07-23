// import { Button } from '@react-navigation/elements';
// import React from 'react';
// import { Button, Image, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function postBtn() {
  return (
    <Link href="../create_posts" asChild>
        <View style={styles.postBtnContainer}>
            <TouchableOpacity style={styles.postBtn}>
                <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
        </View>
    </Link>
);
}

const styles = StyleSheet.create({
    postBtnContainer:{
        position: 'absolute',
        bottom: 85,
        right: 15,
        zIndex: 1000,
        alignItems: 'center',
    },

    postBtn:{
        backgroundColor: '#999',
        width: 40,
        height: 40,
        borderRadius: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    plus:{
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        paddingBottom: 5.4
    }

})

