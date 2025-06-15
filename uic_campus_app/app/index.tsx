import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is the first start of the project!
      </Text>
      <Text>
        run "npx expo start" to run a developement display
      </Text>
    </View>
  );
}
