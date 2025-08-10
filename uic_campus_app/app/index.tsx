import { router } from 'expo-router';
import { Button, ScrollView, View } from 'react-native';

export default function Index() {
  // const rounte = useRouter();

  const pages = [
    { title: 'Loading', route: '/loading' },
    { title: 'Authentication', route: '/authentication' },
    { title: 'Profile Setup', route: '/profile_setup' },
    { title: 'Interests', route: '/interest' },
    { title: 'Social Feed', route: '/social_feed' },
    { title: 'Tap Profile', route: '/tap_profile' },
    { title: 'Create Posts', route: '/create_posts' },
    { title: 'Post Detail', route: '/post_detail' },
    { title: 'User Profile', route: '/user_profile' },
    { title: 'Profile Edit', route: '/profile_edit' },
    { title: 'Community', route: '/community' },
    { title: 'DM', route: '/dm' },
    { title: 'Notifications', route: '/notifications' },
    { title: 'Safety Map', route: '/safety_map' },
    { title: 'Setting', route: '/setting' },
    { title: 'Search', route: '/search' },
    { title: 'Test', route: '/test' },
    { title: 'Events', route: '/events' },
    { title: 'Not Found', route: '/not-found' },
    { title: '404', route: '/404' }  
  ];

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      
      {pages.map((page) => (
        <View key={page.route} style={{ marginVertical: 5, width: '100%' }}>
          <Button title={page.title} onPress={() => router.push(page.route as any)} />
        </View>
      ))}
      
    </ScrollView>
  );
}
