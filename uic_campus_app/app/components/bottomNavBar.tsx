// filepath: c:\Users\tsuyo\Downloads\UIC\UIC_Campus_App\uic_campus_app\app\components\bottomNavBar.tsx
import { Link } from "expo-router";
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from "react-native";
import CommunityIcon from "../images/community.svg";
import DmIcon from "../images/dm.svg";
import EventsIcon from "../images/events.svg";
import HomeIcon from "../images/home.svg";
import SearchIcon from "../images/search.svg";

export default function BottomNavBar() {
  const [activeTab, setActiveTab] = useState('Feed')
  return (
    <View style={styles.bottomNavigation}>
      <Link href='../social_feed' asChild>
        <TouchableOpacity>
          <HomeIcon width={28} height={28} fill="#8F8F8F"/>
        </TouchableOpacity>
      </Link>
      <Link href='../search' asChild>
        <TouchableOpacity>
          <SearchIcon width={28} height={28} fill="#8F8F8F" />
        </TouchableOpacity>
      </Link>
      <Link href='../community' asChild>
        <TouchableOpacity>
          <CommunityIcon width={28} height={28} fill="#8F8F8F"/>
        </TouchableOpacity>
      </Link>
      <Link href='../event' asChild>
        <TouchableOpacity>
          <EventsIcon width={28} height={28} fill="#8F8F8F"/>
        </TouchableOpacity>
      </Link>
      <Link href='../dm' asChild>
        <TouchableOpacity>
          <DmIcon width={28} height={28} fill="#8F8F8F"/>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 65,
    backgroundColor: 'rgb(255, 255, 255)',
    // backdropFilter: 'blur(3px)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
});