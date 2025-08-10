import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./css/notification_style";

export default function HeaderNotification() {
    return (
        <View style={styles.header}>
            <View>
                <Link href="/user_profile" asChild>
                    <TouchableOpacity>
                        <Image
                            style={{
                            width: 38,
                            height: 38
                            }}
                            source={require("../images/profile.png")}  
                        />
                    </TouchableOpacity>
                </Link>
            </View>
            <Text style={{
                fontWeight: "bold", 
                fontSize: 14, 
                color: "#000435",
                }}>Notifications</Text>
            <View>
                <Link href="/user_profile" asChild>
                    <TouchableOpacity>
                        <Image
                            style={{
                            width: 25,
                            height: 25,
                            marginLeft: 10,
                            marginRight: 0
                            }}
                            source={require("../images/settings.png")}  
                        />
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    )
}