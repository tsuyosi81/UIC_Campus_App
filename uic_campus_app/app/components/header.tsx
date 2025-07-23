// import { Button } from '@react-navigation/elements';
// import React from 'react';
// import { Button, Image, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Header() {
  const [activeTab, setActiveTab] = useState('Feed')

  return (  
      <View style={styles.header}>
          <View style={styles.topHeader}>
            <Link href="/user_profile" asChild>
                <TouchableOpacity>
                <Image source={require("../images/dummyImg.jpg")} style={styles.profile}></Image>
                </TouchableOpacity>
            </Link>
            <Link href="/social_feed" asChild>
                <TouchableOpacity>
                <Image source={require("../images/smiley.png")} style={styles.logo}></Image>
                </TouchableOpacity>
            </Link>
            <Link href="/notifications" asChild>
                <TouchableOpacity>  
                <Image source={require('../images/notification.svg')} style={styles.notification}></Image>
                </TouchableOpacity>
            </Link>
          </View>
          
          <View style={styles.contentSelections}>
            <TouchableOpacity onPress={()=>setActiveTab('Feed')}>
                <Text style={styles.selection}>Feed</Text>
                {activeTab === 'Feed' && <View style={styles.underline} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setActiveTab('Following')}>
                <Text style={styles.selection}>Following</Text>
                {activeTab === 'Following' && <View style={styles.underline} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setActiveTab('Lost&Found')}>
                <Text style={styles.selection}>Lost&Found</Text>
                {activeTab === 'Lost&Found' && <View style={styles.underline} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setActiveTab('Safety')}>
                <Text style={styles.selection}>Safety</Text>
                {activeTab === 'Safety' && <View style={styles.underline} />}
            </TouchableOpacity>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({

    header: {
        // position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        // backgroundColor: '#f8f8f8',
        backgroundColor:'#fff',
        justifyContent: 'center',
        // borderBottomWidth: 1,
        // borderBottomColor: '#ccc',
        },

    topHeader:{
        flexDirection: 'row', 
        justifyContent: "space-between", 
        alignItems: 'center',
        paddingVertical: 10,
    },

    profile:{
        marginHorizontal: 15,
        width: 38,
        height: 38,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: '100%'
    },

    logo:{
        width: 20,
        height: 20
    },

    notification:{
        tintColor: 'gray',
        marginHorizontal: 15,
        width: 24,
        height: 24
    },

    contentSelections: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingTop: 10,
        paddingBottom: 0
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
