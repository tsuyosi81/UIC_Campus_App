import { Link } from "expo-router";
import React from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./components/dm_stylesheet.js";

export default function DM() {

  return (
    <>
    <View style={styles.main}>
      <Text style={styles.header}>Recent</Text>
      <View style={styles.mainContainer}>
        <Link href="/dm_messages" asChild>   
          <TouchableOpacity style={styles.messageBoxContainer}>
            <Image 
              style={{
                width: 50,
                height: 50
              }}
              source={require("./images/recipient-avatar.png")}
            />
            <View style={styles.messageBoxTextContainer}>
              <Text style={styles.userName}>UserName</Text>
              <Text>Message sent by the user</Text>
            </View>
            <View style={styles.notificationsContainer}>
              <Text style={{color:"#56636F"}}>11:31 AM</Text>
              <Text style={styles.notifications}>10</Text>
            </View>
          </TouchableOpacity>
        </Link>
        <Link href="/dm_messages" asChild>   
          <TouchableOpacity style={styles.messageBoxContainer}>
            <Image 
              style={{
                width: 50,
                height: 50
              }}
              source={require("./images/recipient-avatar.png")}
            />
            <View style={styles.messageBoxTextContainer}>
              <Text style={styles.userName}>UserName</Text>
              <Text>Message sent by the user</Text>
            </View>
            <View style={styles.notificationsContainer}>
              <Text style={{color:"#56636F"}}>11:31 AM</Text>
              <Text style={styles.notifications}>10</Text>
            </View>
          </TouchableOpacity>
        </Link>
        <Link href="/dm_messages" asChild>   
          <TouchableOpacity style={styles.messageBoxContainer}>
            <Image 
              style={{
                width: 50,
                height: 50
              }}
              source={require("./images/recipient-avatar.png")}
            />
            <View style={styles.messageBoxTextContainer}>
              <Text style={styles.userName}>UserName</Text>
              <Text>Message sent by the user</Text>
            </View>
            <View style={styles.notificationsContainer}>
              <Text style={{color:"#56636F"}}>11:31 AM</Text>
              <Text></Text>
            </View>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
    </>
  );
}
