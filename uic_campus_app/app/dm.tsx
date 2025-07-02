import React from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Tabs from "./components/tabs.jsx";

export default function DM() {
  const [text, setText] = React.useState("")

  return (
    <>
      <View style={styles.main}>
        <View style={styles.inputContainer}>
          <TouchableOpacity>
            <Image
              style={{
                width: 16,
                height: 16
              }}
              source={require("./images/add-media.png")}  
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image 
              style={{
                width: 16,
                height: 16
              }}
              source={require("./images/smiley.png")}  
            />           
          </TouchableOpacity>
          <TextInput 
            style={styles.textInput}
            placeholder="Start typing..."
            placeholderTextColor="#767676"
          />
          <TouchableOpacity>
            <Image 
              style={{
                width: 19,
                height: 15.33
              }}
              source={require("./images/send.png")}  
            />           
          </TouchableOpacity>
        </View>
        <Tabs />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-end",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#E3E8EB",
    height: 46,
    width: "auto",
    margin: 20,
    paddingLeft: 15,
    borderRadius: 25
  },
  textInput: {
    fontSize: 14,
    width: 273,
    height: 40
  }
})