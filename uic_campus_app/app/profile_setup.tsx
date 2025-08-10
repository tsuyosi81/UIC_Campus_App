import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";

import styles from "./components/css/profile_style"; 
import ProfilePicture from "./components/ProfilePicture";



export default function ProfileSetup() {
  

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [major, setMajor] = useState("");
  const [homeTown, setHomeTown] = useState(""); // optional

  const allRequiredFilled =
    firstName.trim() &&
    lastName.trim() &&
    userName.trim() &&
    birthDate.trim() &&
    gradYear.trim() &&
    major.trim();

  return (
    <View style={styles.container}>

      <ProfilePicture /> 

      <View style={styles.header}>
        <Text style={styles.backArrow}>←</Text>
        <Text style={styles.title}>Set up your profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.formContainer}>
        <TextInput
          placeholder="First Name*"
          placeholderTextColor="#888"
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          placeholder="Last Name*"
          placeholderTextColor="#888"
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          placeholder="User Name*"
          placeholderTextColor="#888"
          style={styles.input}
          value={userName}
          onChangeText={setUserName}
        />
        <TextInput
          placeholder="Birth of Date*"
          placeholderTextColor="#888"
          style={styles.input}
          value={birthDate}
          onChangeText={setBirthDate}
        />
        <TextInput
          placeholder="Graduation Year"
          placeholderTextColor="#888"
          style={styles.input}
          value={gradYear}
          onChangeText={setGradYear}
        />
        <TextInput
          placeholder="Major*"
          placeholderTextColor="#888"
          style={styles.input}
          value={major}
          onChangeText={setMajor}
        />
        <TextInput
          placeholder="Home Town (Optional)"
          placeholderTextColor="#888"
          style={styles.input}
          value={homeTown}
          onChangeText={setHomeTown}
        />
      </ScrollView>

      <TouchableOpacity
        style={[
          styles.continueButton,
          !allRequiredFilled && styles.disabledButton,
        ]}
        disabled={!allRequiredFilled}
      >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

