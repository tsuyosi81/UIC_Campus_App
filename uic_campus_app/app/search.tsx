import { Text, View } from "react-native";
import SocialFeed from "./social_feed";

export default function Search() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is the search.tsx
      </Text>

      <SocialFeed></SocialFeed>
    </View>
  );
}
