import React from 'react';
import { Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View, Platform } from "react-native";
import styles from "./components/dm_stylesheet"

export default function DM() {
  const [text, setText] = React.useState("")

  return (
    <>
      <View style={styles.main}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior="padding" 
          keyboardVerticalOffset={80}
        >
          <View style={styles.messageContainer}>
            <View style={styles.senderContainer}>
              <View style={styles.senderMessage}>
                <View style={styles.senderBody}>
                  <Text style={styles.senderTextMessage}>Nerd lmao</Text>
                </View>
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
                <View style={styles.senderBody}>
                  <Text style={styles.senderTextMessage}>Funni hello world</Text>
                </View>
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
            <View style={styles.profileRecipient}>
              <Image
                style={{
                  width: 32, 
                  height: 32
                }}
                  source={require("./images/recipient-avatar.png")}
                />
              <View style={styles.recipientContainer}>
                <View style={styles.recipientMessage}>
                  <View style={styles.recipientHeader}>
                    <Text style={styles.recipientName}>Bob</Text>
                    <Text style={styles.recipientType}>Engineer</Text>
                  </View>
                  <View style={styles.recipientBody}>
                    <Text style={styles.recipientTextMessage}>Plese stop talking to me.</Text>
                  </View>
                  <View style={styles.recipientTimeStamp}>
                    <Text style={styles.recipientTimeStampText}>11:31 AM</Text>
                  </View>
                </View>
                <View style={styles.recipientMessage}>
                  <View style={styles.recipientBody}>
                    <Text style={styles.recipientTextMessage}>Plese stop.</Text>
                  </View>
                  <View style={styles.recipientTimeStamp}>
                    <Text style={styles.recipientTimeStampText}>11:31 AM</Text>
                  </View>
                </View>
              </View>
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
        </KeyboardAvoidingView>
      </View>
    </>
  );
}
