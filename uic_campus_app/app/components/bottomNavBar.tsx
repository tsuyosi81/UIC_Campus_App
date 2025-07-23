import { Link } from "expo-router";
import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export default function BottomNavBar() {
    
  const [activeTab, setActiveTab] = useState('Feed')
      
  return (  
      <View style={styles.bottomNavigation}>
        <Link href='../social_feed' asChild>
            <TouchableOpacity>
                <Image source={require("../images/home.svg")} style={styles.menu}/>
            </TouchableOpacity>
        </Link>
        <Link href='../search' asChild>
          <TouchableOpacity>
              <Image source={require("../images/search.svg")} style={styles.menu} />
          </TouchableOpacity>
        </Link>
        <Link href='../community' asChild>
          <TouchableOpacity>
              <Image source={require("../images/community.svg")} style={styles.menu} />
          </TouchableOpacity>
        </Link>
        <Link href='../event' asChild>
          <TouchableOpacity>
              <Image source={require("../images/events.svg")} style={styles.menu}/>
          </TouchableOpacity>
        </Link>
        <Link href='../dm' asChild>
          <TouchableOpacity>
              <Image source={require("../images/dm.svg")} style={styles.menu} />
          </TouchableOpacity>
        </Link>

      </View>
  );
}

const styles = StyleSheet.create({

    // BOTTOM NAVIGATION

    bottomNavigation: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 70, // Increased height for better image fit
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        padding: 10, // Add padding to prevent image cutoff
    },

    menu: {
        tintColor: '#8F8F8F',
        width: 25,
        height: 25,
        resizeMode: 'contain',
        }
})

