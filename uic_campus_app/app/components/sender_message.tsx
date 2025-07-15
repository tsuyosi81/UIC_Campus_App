import { Image, Text, View } from "react-native";
import styles from "./css/dm_messsage_stylesheet";

export default function SenderMessage(props) {
    return (
        <View style={styles.senderMessage}>
            <View style={styles.senderBody}>
                <Text style={styles.senderTextMessage}>{props.text}</Text>
            </View>
            <View style={styles.senderTimestamp}>
                <Text style={styles.senderTextTimestamp}>{props.timeStamp}</Text>
                <Image 
                style={{
                    width: 16,
                    height: 8
                }}
                source={require("../images/read.png")}
                />
            </View>
        </View>
    )
}
