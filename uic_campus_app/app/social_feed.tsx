// import { Button } from '@react-navigation/elements';
// import React from 'react';
// import { Button, Image, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";

import React from 'react';
import { ScrollView, StyleSheet } from "react-native";
import BottomNavBar from "./components/bottomNavBar.tsx";
import Header from "./components/header.tsx";
import PostBtn from "./components/postBtn.tsx";
import Post from "./post.tsx";

export default function SocialFeed() {
  return (  
    <>
        <Header/>
        <ScrollView style={styles.feed}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </ScrollView>
        <PostBtn/>
        <BottomNavBar/>
    </>
  );
}

const styles = StyleSheet.create({
    feed:{}
})

