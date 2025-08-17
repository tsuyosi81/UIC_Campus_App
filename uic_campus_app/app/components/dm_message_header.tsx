import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./css/layout_stylesheet.js";

export default function DMMessageHeader() {
    return (
        <View style={styles.dmMessageHeader}> 
            <View style={styles.containerMessage}>
                <Link href="/dm" asChild>
                    <TouchableOpacity>
                        <Image
                            style={{
                                width: 16,
                                height: 16
                            }}
                            source={require("../images/arrow.png")}  
                        />
                    </TouchableOpacity>
                </Link>
                <Link href="/user_profile" asChild>
                    <TouchableOpacity>
                        <Image
                            style={{
                            width: 50,
                            height: 50
                            }}
                            source={require("../images/profile.png")}  
                        />
                    </TouchableOpacity>
                </Link>
                <View style={styles.textContainer}>
                    <Text style={styles.nameText}>Name</Text>
                    <Text style={styles.userNameText}>@userID</Text>
                </View>
            </View>
            <View>
                <Link href="/user_profile" asChild>
                    <TouchableOpacity>
                        <Image
                            style={{
                            width: 16,
                            height: 4,
                            margin: 16
                            }}
                            source={require("../images/options.png")}  
                        />
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    )
}