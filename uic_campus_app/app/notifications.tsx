import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./components/notification_style.js";
export default function Notifications() {

  const [activeTab, setActiveTab] = React.useState(0)

  return (
    <>
      <View style={styles.container}>
        <View style={styles.tabContainer}>
          <TouchableOpacity>
            <Text style={styles.tabText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.activeTabText}>Mentions</Text>
          </TouchableOpacity>
        </View>          
      </View>      
    </>
  );
}
