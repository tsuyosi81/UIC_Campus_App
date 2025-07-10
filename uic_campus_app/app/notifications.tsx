import React from "react";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View, Image } from "react-native";
import styles from "./components/notification_style.js";
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
          <View style={styles.notificationContainer}>
            {(activeTab === 'Mentions' || activeTab === 'All') && <Link href="/social_feed" asChild>
              <TouchableOpacity>
                <View style={styles.mentionNotification}>
                  <View style={styles.mentionTop}>
                    <Image
                      style={{
                        width: 25,
                        height: 25
                      }}
                      source={require("./images/like.png")}
                    />
                    <Image
                      style={{
                        width: 30,
                        height: 30
                      }}
                      source={require("./images/avatar.png")}
                    />
                  </View>
                  <View style={styles.mentionText}>
                    <Text><Text style={styles.grayed}>@userID</Text> <Text style={styles.bold}>reacted</Text> to your post.</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Link>}
            {(activeTab === 'Alerts' || activeTab === 'All') && <Link href="/safety_map" asChild>
            <TouchableOpacity>
              <View style={styles.alertNotification}>
                <Image
                  style={{
                    width: 25,
                    height: 21
                  }}
                  source={require("./images/warn1.png")}
                />
                <View>
                  <Text style={{marginRight: 10}}>
                    <Text style={styles.bold}>UIC Alert:</Text> <Text style={styles.grayed}>[alertDetails]</Text>. Avoid <Text style={styles.grayed}>[location]</Text>. Tap for more.
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </Link>}
          {(activeTab === 'Mentions' || activeTab === 'All') && <Link href="/social_feed" asChild>
            <TouchableOpacity>
              <View style={styles.mentionNotification}>
                <View style={styles.mentionTop}>
                  <Image
                    style={{
                      width: 25,
                      height: 25
                    }}
                    source={require("./images/comment.png")}
                  />
                  <Image
                    style={{
                      width: 30,
                      height: 30
                    }}
                    source={require("./images/avatar.png")}
                  />
                </View>
                <View style={styles.mentionText}>
                  <Text><Text style={styles.grayed}>@userID</Text> <Text style={styles.bold}>commented</Text> on your post.</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Link>}
          {(activeTab === 'Mentions' || activeTab === 'All') && <Link href="/social_feed" asChild>
            <TouchableOpacity>
              <View style={styles.mentionNotification}>
                <View style={styles.mentionTop}>
                  <Image
                    style={{
                      width: 25,
                      height: 25
                    }}
                    source={require("./images/heart.png")}
                  />
                  <Image
                    style={{
                      width: 30,
                      height: 30
                    }}
                    source={require("./images/avatar.png")}
                  />
                  <Image
                    style={{
                      width: 30,
                      height: 30
                    }}
                    source={require("./images/avatar.png")}
                  />
                </View>
                <View style={styles.mentionText}>
                  <Text><Text style={styles.grayed}>@userID1</Text> and <Text style={styles.grayed}>@userID2</Text> <Text style={styles.bold}>reacted</Text> to your post.</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Link>}
          {(activeTab === 'Alerts' || activeTab === 'All') && <Link href="/safety_map" asChild>
            <TouchableOpacity>
              <View style={styles.alertNotification}>
                <Image
                  style={{
                    width: 25,
                    height: 25
                  }}
                  source={require("./images/warn2.png")}
                />
                <View>
                  <Text style={{marginRight: 10}}>
                    <Text style={styles.bold}>Crowd warning:</Text> <Text style={styles.grayed}>@userID</Text> reported unsafe conditions at <Text style={styles.grayed}>[location]</Text>. Tap to confirm.
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </Link>}
        </View>               
      </View> 
    </>
  );
}
