import { Link, Stack } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="dm" options={{
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
                  margin: 16,
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

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    fontFamily: 'WorkSans-VariableFont_wght',
    marginLeft: -8
  },
  textContainer: {
    display: 'flex',
    gap: 1,
    marginLeft: 10

  },
  nameText: {
    fontSize: 14
  },
  userNameText: {
    fontSize: 12,
    color: "#767676"
  },
})

//Note: I'm going to try to move this all into a component eventually to make it look more clean for when we add other header desings