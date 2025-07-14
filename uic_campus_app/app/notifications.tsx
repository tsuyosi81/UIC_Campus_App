import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Event from "./components/events.tsx";
import Mention from "./components/mention.tsx";
import styles from "./components/notification_style.js";
import Reminder from "./components/reminder.tsx";
import Warning from "./components/warning.tsx";

export default function Notifications() {

  const [activeTab, setActiveTab] = React.useState('All')

  return (
    <>
      <View style={styles.container}>
        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={() => setActiveTab('All')}>
            <Text style={[styles.tabText, activeTab === 'All' && styles.activeTabText]}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('Mentions')}>
            <Text style={[styles.tabText, activeTab === 'Mentions' && styles.activeTabText]}>Mentions</Text>
          </TouchableOpacity>
        </View>
          <ScrollView style={styles.notificationContainer}>
            {(activeTab === 'Mentions' || activeTab === 'All') && <Mention 
              link="/social_feed" 
              avatarSource={require("./images/avatar.png")} 
              actionSource={require("./images/like.png")} 
              users="Bob" 
              action="reacted"
            />}
            {(activeTab === 'Alerts' || activeTab === 'All') && <Warning
              link="/safety_map"
              action="alert"
              location="[location]"
              alertDetails="[alertDetails]."
            />}
          {(activeTab === 'Mentions' || activeTab === 'All') && <Mention 
              link="/social_feed" 
              avatarSource={require("./images/avatar.png")} 
              actionSource={require("./images/comment.png")} 
              users="Zach" 
              action="commented"
            />}
            {(activeTab === 'Mentions' || activeTab === 'All') && <Mention 
              link="/social_feed" 
              avatarSource={require("./images/avatar.png")} 
              actionSource={require("./images/mad.png")} 
              users="AAAAA" 
              action="reacted"
            />}
          {(activeTab === 'Alerts' || activeTab === 'All') && <Warning
            link="/safety_map"
            action="warn"
            location="[location]"
            user="Shawn"
          />}
          {(activeTab === 'Events' || activeTab === 'All') && <Reminder
            link="/event"
            name="[eventName]"
            timeLeft="[timeLeft]"
          />}
          {(activeTab === 'Mentions' || activeTab === 'All') && <Mention 
            link="/social_feed" 
            avatarSource={require("./images/avatar.png")} 
            actionSource={require("./images/heart.png")} 
            users="Gabe" 
            action="reacted"
          />}
          {(activeTab === 'Mentions' || activeTab === 'All') && <Mention 
            link="/social_feed" 
            avatarSource={require("./images/avatar.png")} 
            actionSource={require("./images/comment.png")} 
            users="HelloWorld" 
            action="commented"
          />}
          {(activeTab === 'Events' || activeTab === 'All') && <Event
            link="/event"
            name="[eventName]"
            organization="@org"
          />}
        </ScrollView>               
      </View> 
    </>
  );
}

//User object should be made