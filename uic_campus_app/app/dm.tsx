import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function DM() {
  const [text, setText] = React.useState("")

  return (
    <>
      <View style={styles.main}>
        <View style={styles.messageContainer}>
          <View style={styles.senderContainer}>
            <View style={styles.senderMessage}>
              <Text style={styles.senderTextMessage}>Nerd lmao</Text>
              <View style={styles.senderTimestamp}>
                <Text style={styles.senderTextTimestamp}>11:31 AM</Text>
                <Image 
                  style={{
                    width: 16,
                    height: 8
                  }}
                  source={require("./images/read.png")}
                />
              </View>
            </View>
            <View style={styles.senderMessage}>
              <Text style={styles.senderTextMessage}>Funni hello world</Text>
              <View style={styles.senderTimestamp}>
                <Text style={styles.senderTextTimestamp}>11:31 AM</Text>
                <Image 
                  style={{
                    width: 16,
                    height: 8
                  }}
                  source={require("./images/read.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.recipientContainer}>
          </View>
        </View>
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
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between"
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#E3E8EB",
    height: 46,
    width: "auto",
    margin: 25,
    marginHorizontal: 20,
    paddingLeft: 15,
    borderRadius: 25
  },
  textInput: {
    fontSize: 14,
    width: 273,
    height: 40
  },
  messageContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column", 
    marginVertical: 20,
    marginHorizontal: 40,
    gap: 35
  },
  senderContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "flex-end"
  },
  senderMessage: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#56636F",
    padding: 8,
    gap: 8,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 3 }
  },
  senderTextMessage: {
    color: "#ffffff",
    fontSize: 16
  },
  senderTimestamp: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    paddingTop: 18
  },
  senderTextTimestamp: {
    color: "#ffffff",
    fontSize: 12
  },
  recipientContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "flex-start"
  }
})