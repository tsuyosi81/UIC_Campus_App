// import { Button } from '@react-navigation/elements';
// import React from 'react';
// import { Button, Image, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";

import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfileSelections() {
  const [activeTab, setActiveTab] = useState('Feed');

  const tabs = ['Feed', 'Repost/Comment', 'Media'];

  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          style={styles.tabButton}
          onPress={() => setActiveTab(tab)}
        >
          <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
            {tab}
          </Text>
          {activeTab === tab && <View style={styles.underline} />}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingTop: 10,
    paddingBottom: 4,
  },

  tabButton: {
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 6,
  },

  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },

  activeTabText: {
    color: 'black',
  },

  underline: {
    marginTop: 4,
    height: 3,
    width: '100%',
    backgroundColor: 'dodgerblue',
    borderRadius: 2,
  },
});

