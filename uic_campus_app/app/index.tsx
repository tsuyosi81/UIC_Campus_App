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
      <Text>This is the first start of the project!
      </Text>
      <Text>
        run "npx expo start" to run a developement display
      </Text>
      <Button onPress={() => router.navigate('/create_posts')}>Go to About</Button>;
    </View>
  );
}
