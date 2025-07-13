import { Image, KeyboardAvoidingView, ScrollView, View } from "react-native";
import styles from "./components/dm_messsage_stylesheet";
import Input from "./components/input.tsx";
import RecipientMessage from "./components/recipient_message.tsx";
import SenderMessage from "./components/sender_message.tsx";

export default function DM_Messages() {

  return (
    <>
      <View style={styles.main}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior="padding" 
          keyboardVerticalOffset={80}
        >
          <ScrollView style={styles.messageContainer}>
            <View style={styles.senderContainer}>
              <SenderMessage text="Nerd lmao" timeStamp="11:31 AM"/>
              <SenderMessage text="Funni hello world" timeStamp="11:31 AM"/>
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
                <RecipientMessage text="Please stop talking to me" timeStamp="11:31 AM" isHeader={true} name="Bob" type="Engineer"/>
                <RecipientMessage text="Please stop." timeStamp="11:31 AM" isHeader={false}/>
                <RecipientMessage text="Please stop." timeStamp="11:31 AM" isHeader={false}/>
                <RecipientMessage text="Please stop." timeStamp="11:31 AM" isHeader={false}/>
                <RecipientMessage text="Please stop." timeStamp="11:31 AM" isHeader={false}/>
                <RecipientMessage text="Please stop." timeStamp="11:31 AM" isHeader={false}/>
                <RecipientMessage text="Please stop." timeStamp="11:31 AM" isHeader={false}/>
                <RecipientMessage text="Please stop." timeStamp="11:31 AM" isHeader={false}/>
                <RecipientMessage text="Please stop." timeStamp="11:31 AM" isHeader={false}/>
                <RecipientMessage text="Please stop." timeStamp="11:31 AM" isHeader={false}/>
                <RecipientMessage text="Please stop." timeStamp="11:31 AM" isHeader={false}/>
                <RecipientMessage text="Please stop." timeStamp="11:31 AM" isHeader={false}/>
              </View>
            </View>
            <View style={styles.senderContainer}>
              <SenderMessage text="no" timeStamp="11:31 AM"/>
            </View>
          </ScrollView>
          <Input/>
        </KeyboardAvoidingView>
      </View>
    </>
  );
}
