import { Link, Stack } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./components/layout_stylesheet.js";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="dm" options={{
      title: "",
      headerTintColor: "black",
      headerBackVisible: false,
      headerTitle: () => (
        <View style={styles.searchContainer}>
          <TouchableOpacity>
            <Image
              style={{
                width: 14,
                height: 14
              }}
              source={require("./images/search.png")}  
            />
          </TouchableOpacity>
          <TextInput 
            placeholder="Search conversation"
            placeholderTextColor="#767676"
          />
        </View>
      ),
      headerLeft: () => (
        <View style={styles.container}>
          <Link href="/user_profile" asChild>
            <TouchableOpacity>
              <Image
                style={{
                  width: 38,
                  height: 38
                }}
                source={require("./images/profile.png")}  
              />
            </TouchableOpacity>
          </Link>
        </View>
      ),
      headerRight: () => (
        <View>
          <Link href="/notifications" asChild>
            <TouchableOpacity>
              <Image
                style={{
                  width: 24,
                  height: 24,
                  margin: 0
                }}
                source={require("./images/notification.png")}  
              />
            </TouchableOpacity>
          </Link>
        </View>
      )
    }}/>

    <Stack.Screen name="dm_messages" options={{
      title: "",
      headerBackImageSource: require("./images/arrow.png"),
      headerTintColor: "black",
      headerBackVisible: true,
      headerBackButtonDisplayMode: "minimal",
      headerLeft: () => (
        <View style={styles.container}>
          <Link href="/user_profile" asChild>
            <TouchableOpacity>
              <Image
                style={{
                  width: 38,
                  height: 38
                }}
                source={require("./images/profile.png")}  
              />
            </TouchableOpacity>
          </Link>
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>Name</Text>
            <Text style={styles.userNameText}>@userID</Text>
          </View>
        </View>
      ),
      headerRight: () => (
        <View>
          <Link href="/user_profile" asChild>
            <TouchableOpacity>
              <Image
                style={{
                  width: 16,
                  height: 4,
                  margin: 16
                }}
                source={require("./images/options.png")}  
              />
            </TouchableOpacity>
          </Link>
        </View>
      )
    }}/>
  </Stack>;
}
