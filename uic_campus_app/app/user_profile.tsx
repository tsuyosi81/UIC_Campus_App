import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import BottomNavBar from './components/bottomNavBar';
import ProfileSelections from './components/profileSelections';
import UserInfo from "./components/userInfo";


export default function UserProfile() {
  return (
    <>
    {/* <Header2 /> */}
    <ScrollView>
    <UserInfo/>
    <ProfileSelections/>
      {/* <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post /> */}
    </ScrollView>
    <BottomNavBar />
    </>
  );
}

const styles = StyleSheet.create({
})


