import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./notification_style.js";

export default function Warning(props) {
    return (
        <>
            {props.action === "alert" && <Link href={props.link} asChild>
                <TouchableOpacity>
                    <View style={styles.alertNotification}>
                        <Image
                            style={{
                                width: 25,
                                height: 21
                            }}
                            source={require("../images/warn1.png")}
                        />
                        <View>
                            <Text style={{marginRight: 10}}>
                                <Text style={styles.bold}>UIC Alert: </Text> 
                                <Text style={styles.grayed}>{props.alertDetails} </Text> 
                                Avoid <Text style={styles.grayed}>{props.location}</Text>. 
                                Tap for more.
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Link>}
            {props.action === "warn" && <Link href={props.link} asChild>
                <TouchableOpacity>
                    <View style={styles.alertNotification}>
                        <Image
                            style={{
                                width: 25,
                                height: 25
                            }}
                            source={require("../images/warn2.png")}
                        />
                        <View>
                            <Text style={{marginRight: 10}}>
                                <Text style={styles.bold}>Crowd warning: </Text> 
                                <Text style={styles.grayed}>{props.user} </Text> 
                                reported unsafe conditions at 
                                <Text style={styles.grayed}> {props.location}</Text>. 
                                Tap to confirm.
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Link>}
        </>
    )
}