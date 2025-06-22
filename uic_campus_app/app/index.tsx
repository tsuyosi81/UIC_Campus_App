import { useRouter } from 'expo-router';
import { Button, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is a merge conflict test!
      </Text>
      <Text>
        run "npx expo start" to run a developement display
      </Text>
      <Button
      title="Go to Create Post"
      onPress={() => router.push("/create_posts")}
      />
      <Button
      title="Go to Authentication"
      onPress={() => router.push("/authentication")}
      />
      <Button
      title="Go to Community"
      onPress={() => router.push("/community")}
      />
      <Button
      title="Go to DM"
      onPress={() => router.push("/dm")}
      />
      <Button
      title="Go to Events"
      onPress={() => router.push("/event")}
      />
      
    </View>
  );
}
