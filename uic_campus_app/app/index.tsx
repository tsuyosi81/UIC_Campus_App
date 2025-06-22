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
      
      <Text>Naviate using the following buttons.</Text>
      
      <Text>run "npx expo start" to run a developement display</Text>
      
      <Button title="Go to Create Posts" onPress={() => router.push('/create_posts')} />
      <Button title="Go to Loading" onPress={() => router.push('/loading')} />
      <Button title="Go to Notifications" onPress={() => router.push('/notifications')} />
      <Button title="Go to Profile Setup" onPress={() => router.push('/profile_setup')} />
      <Button title="Go to Safety Map" onPress={() => router.push('/safety_map')} />
      <Button title="Go to Search" onPress={() => router.push('/search')} />
      <Button title="Go to Social Feed" onPress={() => router.push('/social_feed')} />
      <Button title="Go to Test" onPress={() => router.push('/test')} />
      <Button title="Go to User Profile" onPress={() => router.push('/user_profile')} />
      <Button title="Go to Authentication" onPress={() => router.push("/authentication")}/>
      <Button title="Go to Community" onPress={() => router.push("/community")} />
      <Button title="Go to DM" onPress={() => router.push("/dm")}/>
      <Button title="Go to Events" onPress={() => router.push("/event")}/>
      
    </View>
  );
}
