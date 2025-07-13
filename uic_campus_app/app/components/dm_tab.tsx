import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./dm_stylesheet.js";

export default function DmTab(props) {
    return (
        <Link href={props.link} asChild>   
          <TouchableOpacity style={styles.messageBoxContainer}>
            <Image 
              style={{
                width: 50,
                height: 50,
              }}
              source={props.avatar}
            />
            <View style={styles.messageBoxTextContainer}>
              <Text style={styles.userName}>{props.userName}</Text>
              <Text>Message sent by the user</Text>
            </View>
            <View style={styles.notificationsContainer}>
              <Text style={{color:"#56636F"}}>{props.timeStamp}</Text>
              {props.notifications != 0 ? <View style={styles.notifications}>
                <Text style={{color:"#ffffff"}}>{props.notifications.toString()}</Text>
              </View> : <Text></Text>}
            </View>
          </TouchableOpacity>
        </Link>
    )
}