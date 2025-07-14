import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./notification_style.js";

export default function Mention(props) {
    return (
        <Link href={props.link} asChild>
            <TouchableOpacity>
                <View style={styles.mentionNotification}>
                    <View style={styles.mentionTop}>
                        <Image
                            style={{
                            width: 25,
                            height: 25
                        }}
                        source={props.actionSource}
                        />
                        <Image
                            style={{
                            width: 30,
                            height: 30
                        }}
                        source={props.avatarSource}
                        />
                    </View>
                    <View style={styles.mentionText}>
                        <Text>
                            <Text style={styles.grayed}>{props.users} </Text> 
                            <Text style={styles.bold}>{props.action} </Text> 
                            {props.action === "reacted" ? "to" : "on"} your post.
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Link>
    )
}