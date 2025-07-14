import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./css/notification_style.js";

export default function Reminder(props) {
    return (
        <>
            <Link href={props.link} asChild>
                <TouchableOpacity>
                    <View style={styles.alertNotification}>
                        <Image
                            style={{
                                width: 21,
                                height: 23
                            }}
                            source={require("../images/calendar.png")}
                        />
                        <View>
                            <Text style={{marginRight: 10}}>
                                <Text style={styles.bold}>Reminder: </Text> 
                                <Text style={styles.grayed}>{props.name}</Text> starts in 
                                <Text style={styles.grayed}> {props.timeLeft}</Text>. Tap more for details. 
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Link>
        </>
    )
}