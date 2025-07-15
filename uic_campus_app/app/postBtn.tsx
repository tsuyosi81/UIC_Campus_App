// import { Button } from '@react-navigation/elements';
// import React from 'react';
// import { Button, Image, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function postBtn() {
  return (
    <View style={styles.postBtnContainer}>
        <TouchableOpacity style={styles.postBtn}>
            <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
    </View>
);
}

const styles = StyleSheet.create({
    postBtnContainer:{
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

