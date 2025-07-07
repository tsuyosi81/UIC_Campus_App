import { Link, Stack } from "expo-router";
import { Image, TouchableOpacity, View } from "react-native";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="notifications" options={{
      title: "Notifications",
      headerTintColor: "#000435",
      headerBackVisible: false,
      headerBackButtonDisplayMode: "minimal",
      headerLeft: () => (
        <View>
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
          <Link href="/user_profile" asChild>
            <TouchableOpacity>
              <Image
                style={{
                  width: 24,
                  height: 24,
                }}
                source={require("./images/settings.png")}  
              />
            </TouchableOpacity>
          </Link>
        </View>
      )
    }}/>
  </Stack>;
}
