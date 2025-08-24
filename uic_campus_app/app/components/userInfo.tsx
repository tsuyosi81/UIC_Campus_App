import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function UserInfo() {
  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.userInfoContainer}>
        <Image source={require("../images/dummyImg.jpg")} style={styles.profile} />
        <View style={styles.userInfo}>
          <Text style={styles.username}>UserName</Text>
          <Text style={styles.userHandle}>@userID</Text>
          <TouchableOpacity onPress={() => console.log('College Major pressed')}>
            <Text style={styles.major}>College Major</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bio Section */}
      <View style={styles.bio}>
        <Text style={styles.bioText}>
          Lorem ipsum dolor sit amet, ing elit. Vivamus ssee. Lorem ipsum dolor sit amet, ing elit. Vivamus ssee.
        </Text>
      </View>

      {/* Follow Section */}
      {/* <View style={styles.followContainer}>
        <Text style={styles.follow}>10 Following</Text>
        <Text style={styles.follow}>20 Followers</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },

  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 15,
  },

  userInfo: {
    justifyContent: 'space-between',
    height: 80,
  },

  username: {
    color: '#000',
    fontWeight: '700',
    fontSize: 16,
  },

  userHandle: {
    color: '#666',
    fontSize: 13,
  },

  major: {
    backgroundColor: '#007bff',
    color: '#fff',
    paddingVertical: 4,
    paddingHorizontal: 10,
    fontSize: 13,
    borderRadius: 20,
    fontWeight: '500',
    alignSelf: 'flex-start',
    marginTop: 6,
  },

  bio: {
    marginTop: 16,
  },

  bioText: {
    fontSize: 14,
    color: '#000',
    lineHeight: 20,
  },

  followContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },

  follow: {
    marginRight: 20,
    fontWeight: '700',
    fontSize: 14,
    color: '#000',
  },
});
