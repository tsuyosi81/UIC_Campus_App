// import { Button } from '@react-navigation/elements';
// import React from 'react';
// import { Button, Image, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";

import React from 'react';
import { ScrollView, StyleSheet, Text, View } from "react-native";


export default function SocialFeed() {
  return (  
    <>

    <View style={styles.header}>
        {/* Your header content goes here */}

        <Text>header</Text>
        
        <View style={styles.contentSelections}></View>
    </View>
    
    <ScrollView style={styles.feed}>

        <Text>social feed</Text>

        {/* Your feed content goes here */}
        <View style={styles.post}>
            {/* Individual user post content */}
            <Text>post</Text>
        </View>
    </ScrollView>
    
    {/* NOTE: Bottmon Navigation */}

    <View style={styles.bottomNavigation}>


        {/* home, search, community, event, dm */}

        <img src="" alt="home" />
        <img src="" alt="search" />
        <img src="" alt="community" />
        <img src="" alt="event" />
        <img src="" alt="dm" />
    </View>

    </>
  );
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    contentSelections: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingVertical: 10,
    },
    feed: {
        flex: 1,
        marginBottom: 60, // To avoid being hidden behind the bottom navigation
    },
    post: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    bottomNavigation: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    }
})

