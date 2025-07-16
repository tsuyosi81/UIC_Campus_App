// import { Button } from '@react-navigation/elements';
// import React from 'react';
// import { Button, Image, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";

import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfileSelections() {
  const [activeTab, setActiveTab] = useState('Feed')

  return (  
          <View style={styles.contentSelections}>
            <TouchableOpacity onPress={()=>setActiveTab('Feed')}>
                <Text style={styles.selection}>Feed</Text>
                {activeTab === 'Feed' && <View style={styles.underline} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setActiveTab('Repost/Comment')}>
                <Text style={styles.selection}>Repost/Comment</Text>
                {activeTab === 'Repost/Comment' && <View style={styles.underline} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setActiveTab('Media')}>
                <Text style={styles.selection}>Media</Text>
                {activeTab === 'Media' && <View style={styles.underline} />}
            </TouchableOpacity>
          </View>
  );
}

const styles = StyleSheet.create({

    contentSelections: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingTop: 30,
        paddingBottom: 0,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    },

    selection:{
        marginBottom: 0,
        fontWeight: '600',
        fontSize: 14,
    },

    underline: {
        marginTop: 4,
        height: 3,
        width: '100%',
        backgroundColor: 'dodgerblue',
        borderRadius: 2,
  },
})
