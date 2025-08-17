import { Link } from "expo-router";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./css/layout_stylesheet.js";

export default function DMHeader() {
    return (
        <View style={styles.dmHeader}>
            <View style={styles.containerDM}>
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
            </View>  
            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Image
                    style={{
                        width: 14,
                        height: 14
                    }}
                    source={require("../images/search.png")}  
                    />
                </TouchableOpacity>
                <TextInput 
                    placeholder="Search conversation"
                    placeholderTextColor="#767676"
                />
            </View>
            <View>
                <Link href="/notifications" asChild>
                    <TouchableOpacity>
                        <Image
                            style={{
                            width: 24,
                            height: 24,
                            margin: 0
                            }}
                            source={require("../images/notification.png")}  
                        />
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    )
}