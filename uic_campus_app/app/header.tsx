// import { Button } from '@react-navigation/elements';
// import React from 'react';
// import { Button, Image, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";

import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Header() {
  return (  
      <View style={styles.header}>

          <View style={styles.topHeader}>
            <TouchableOpacity>
            <Image source={require("./images/dummyImg.jpg")} style={styles.profile}></Image>
            </TouchableOpacity>

            <TouchableOpacity>
            <Image source={require('./images/notification.svg')} style={styles.notification}></Image>
            </TouchableOpacity>
          </View>
          
          <View style={styles.contentSelections}>
            <TouchableOpacity onPress={()=>console.log('Content Selection Pressed')}><Text style={styles.selection}>Feed</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>console.log('Content Selection Pressed')}><Text style={styles.selection}>Following</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>console.log('Content Selection Pressed')}><Text style={styles.selection}>Lost&Found</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>console.log('Content Selection Pressed')}><Text style={styles.selection}>Safety</Text></TouchableOpacity>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({

    header: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
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
    }
})
