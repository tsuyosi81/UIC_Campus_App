// communityTemplate.tsx
import React from 'react';
import { View, Text } from 'react-native';

const CommunityTemplate = ({ route }) => {
  const { community } = route.params; // Get the community data from route params

  return (
    <View>
      <Text>{community.name}</Text>
      <Text>{community.description}</Text>
      {/* Add more community details as needed */}
    </View>
  );
};

export default CommunityTemplate;
