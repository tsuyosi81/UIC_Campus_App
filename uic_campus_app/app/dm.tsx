import { ScrollView, Text, View } from "react-native";
import styles from "./components/dm_stylesheet.js";
import DmTab from "./components/dm_tab.tsx";

export default function DM() {

  return (
    <>
    <View style={styles.main}>
      <Text style={styles.header}>Recent</Text>
      <ScrollView style={styles.mainContainer}>
        <DmTab userName="Bob" timeStamp="10:30 AM" notifications={1} link="/dm_messages" avatar={require("./images/recipient-avatar.png")}/>
        <DmTab userName="Sam" timeStamp="12:10 PM" notifications={10} link="/dm_messages" avatar={require("./images/recipient-avatar.png")}/>
        <DmTab userName="Katherine" timeStamp="11:03 AM" notifications={0} link="/dm_messages" avatar={require("./images/recipient-avatar.png")}/>
        <DmTab userName="Bob2" timeStamp="11:03 AM" notifications={4} link="/dm_messages" avatar={require("./images/recipient-avatar.png")}/>
        <DmTab userName="HelloWorld" timeStamp="11:03 AM" notifications={3} link="/dm_messages" avatar={require("./images/recipient-avatar.png")}/>
        <DmTab userName="Buddy" timeStamp="6:03 AM" notifications={1} link="/dm_messages" avatar={require("./images/recipient-avatar.png")}/>
        <DmTab userName="Chris" timeStamp="11:03 PM" notifications={0} link="/dm_messages" avatar={require("./images/recipient-avatar.png")}/>
        <DmTab userName="Gerald" timeStamp="11:03 AM" notifications={0} link="/dm_messages" avatar={require("./images/recipient-avatar.png")}/>
        <DmTab userName="Tina" timeStamp="11:10 AM" notifications={4} link="/dm_messages" avatar={require("./images/recipient-avatar.png")}/>
        <DmTab userName="AAAAAA" timeStamp="2:03 PM" notifications={7} link="/dm_messages" avatar={require("./images/recipient-avatar.png")}/>
        <DmTab userName="Claude" timeStamp="11:03 AM" notifications={5} link="/dm_messages" avatar={require("./images/recipient-avatar.png")}/>
        <DmTab userName="Tim" timeStamp="8:03 AM" notifications={0} link="/dm_messages" avatar={require("./images/recipient-avatar.png")}/>
        <DmTab userName="Tim2" timeStamp="11:03 PM" notifications={0} link="/dm_messages" avatar={require("./images/recipient-avatar.png")}/>
      </ScrollView>
    </View>
    </>
  );
}
