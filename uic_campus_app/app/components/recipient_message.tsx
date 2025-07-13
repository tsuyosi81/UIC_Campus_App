import { Text, View } from "react-native";
import styles from "./dm_messsage_stylesheet";

export default function RecipientMessage(props) {
    return (
        <View style={styles.recipientMessage}>
            {props.isHeader && <View style={styles.recipientHeader}>
                <Text style={styles.recipientName}>{props.name}</Text>
                <Text style={styles.recipientType}>{props.type}</Text>
            </View>}
            <View style={styles.recipientBody}>
                <Text style={styles.recipientTextMessage}>{props.text}</Text>
            </View>
            <View style={styles.recipientTimeStamp}>
                <Text style={styles.recipientTimeStampText}>{props.timeStamp}</Text>
            </View>
        </View>        
    )
}