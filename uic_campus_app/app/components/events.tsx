import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./notification_style.js";

export default function Events(props) {
    return (
        <>
            <Link href={props.link} asChild>
                <TouchableOpacity>
                    <View style={styles.alertNotification}>
                        <Image
                            style={{
                                width: 25,
                                height: 24
                            }}
                            source={require("../images/party.png")}
                        />
                        <View>
                            <Text style={{marginRight: 10}}>
                                <Text style={styles.bold}>New event: </Text> 
                                <Text style={styles.grayed}>{props.name}</Text> by
                                <Text style={styles.grayed}> {props.organization}</Text>. Tap more for details. 
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Link>
        </>
    )
}