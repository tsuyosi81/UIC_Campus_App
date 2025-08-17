import { router, useRouter } from 'expo-router';
import { Button, ScrollView, View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../contexts/AuthContext';

export default function Index() {
  const router = useRouter();
  const { user, loading } = useAuth();

  // Pages that require authentication
  const authenticatedPages = [
    { title: 'Create Posts', route: '/create_posts' },
    { title: 'Notifications', route: '/notifications' },
    { title: 'Profile Setup', route: '/profile_setup' },
    { title: 'Safety Map', route: '/safety_map' },
    { title: 'Search', route: '/search' },
    { title: 'Social Feed', route: '/social_feed' },
    { title: 'User Profile', route: '/user_profile' },
    { title: 'Community', route: '/community' },
    { title: 'DM', route: '/dm' },
    { title: 'Events', route: '/event' },
    { title: 'Sign in check', route: '/signInCheck' },
  ];

  // Pages available to non-authenticated users
  const publicPages = [
    { title: 'Login', route: '/authentication' },
    { title: 'Create Account', route: '/start' },
  ];

  // Development/testing pages (always visible)
  const devPages = [
    { title: 'Loading', route: '/loading' },
    { title: 'Test', route: '/test' },
    { title: 'Not Found', route: '/not-found' },
    { title: '404', route: '/404' }
  ];

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  const currentPages = user ? authenticatedPages : publicPages;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {user ? `Welcome, ${user.email}!` : 'Welcome to UIC Campus App'}
        </Text>
        <Text style={styles.subtitle}>
          {user ? 'Authenticated Pages' : 'Please login to access more features'}
        </Text>
      </View>
      
      {currentPages.map((page) => (
        <View key={page.route} style={styles.buttonWrapper}>
          <Button 
            title={`Go to ${page.title}`} 
            onPress={() => router.push(page.route as any)} 
          />
        </View>
      ))}

      {/* Development pages - always visible */}
      <View style={styles.divider}>
        <Text style={styles.dividerText}>Development Pages</Text>
      </View>
      
      {devPages.map((page) => (
        <View key={page.route} style={styles.buttonWrapper}>
          <Button 
            title={`Go to ${page.title}`} 
            onPress={() => router.push(page.route as any)} 
          />
        </View>
      ))}
      
    </ScrollView>
  );

}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  loadingText: {
    fontSize: 18,
    color: '#666',
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
  },
  buttonWrapper: {
    marginVertical: 5,
    width: '100%',
  },
  divider: {
    marginVertical: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    width: '100%',
  },
  dividerText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: '#888',
  },
});
