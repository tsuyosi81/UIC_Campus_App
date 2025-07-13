import { Image, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./dm_messsage_stylesheet";

export default function Input() {
    return (
        <View style={styles.inputContainer}>
            <TouchableOpacity>
            <Image
                style={{
                width: 16,
                height: 16
                }}
                source={require("../images/add-media.png")}  
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image 
                style={{
                width: 16,
                height: 16
                }}
                source={require("../images/smiley.png")}  
            />           
            </TouchableOpacity>
            <TextInput 
            style={styles.textInput}
            placeholder="Start typing..."
            placeholderTextColor="#767676"
            />
            <TouchableOpacity>
            <Image 
                style={{
                width: 19,
                height: 15.33
                }}
                source={require("../images/send.png")}  
            />           
            </TouchableOpacity>
        </View>
    )
}