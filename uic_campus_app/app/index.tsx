import { router, useRouter } from 'expo-router';
import { Button, ScrollView, View } from 'react-native';

export default function Index() {
  const rounter = useRouter();

  const pages = [
    { title: 'Create Posts', route: '/create_posts' },
    { title: 'Loading', route: '/loading' },
    { title: 'Notifications', route: '/notifications' },
    { title: 'Profile Setup', route: '/profile_setup' },
    { title: 'Safety Map', route: '/safety_map' },
    { title: 'Search', route: '/search' },
    { title: 'Social Feed', route: '/social_feed' },
    { title: 'Test', route: '/test' },
    { title: 'User Profile', route: '/user_profile' },
    { title: 'Authentication', route: '/authentication' },
    { title: 'Community', route: '/community' },
    { title: 'DM', route: '/dm' },
    { title: 'Events', route: '/event' },
    { title: 'Not Found', route: '/not-found' },
    { title: '404', route: '/404' }  
  ];

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      
      {pages.map((page) => (
        <View key={page.route} style={{ marginVertical: 5, width: '100%' }}>
          <Button title={`Go to ${page.title}`} onPress={() => router.push(page.route as any)} />
        </View>
      ))}
      
    </ScrollView>
  );

}
