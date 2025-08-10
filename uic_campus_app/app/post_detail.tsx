// import { Button } from '@react-navigation/elements';
// import React from 'react';
// import { Button, Image, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";

import React from 'react';
import { ScrollView, StyleSheet, Text, View } from "react-native";
import BottomNavBar from './components/bottomNavBar.tsx';
import Header2 from "./components/header2.tsx";
import Post from "./components/post.tsx";

export default function PostDetail() {
  return ( 
    <View>
        <Header2/>
        <Post/>
        <ScrollView>
            <Text>Hi</Text>
        </ScrollView>
        <BottomNavBar />
    </View>
);
}

const styles = StyleSheet.create({
    
})

