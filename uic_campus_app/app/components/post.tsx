// import { Button } from '@react-navigation/elements';
// import React from 'react';
// import { Button, Image, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// ...existing code...
// import HomeIcon from '../images/home.svg';
// Usage:

export default function post() {
  return ( 
    <View style={styles.postContainer}>
        <View style={styles.post}>
            <Link href='../user_profile' asChild>
                <TouchableOpacity>
                <Image style={styles.userProfile} source={require("../images/dummyImg.jpg")}></Image>
                {/* <HomeIcon width={24} height={24} />                 */}
                </TouchableOpacity>
            </Link>
            <View style={styles.content}>
                <View style={styles.userInfo}>

                    <Text style={{marginEnd: 10, color: '#000', fontWeight: '600'}}>User Name</Text>
                    <Link href='../user_profile' asChild>
                        <TouchableOpacity style={{marginEnd: 10}}>
                            <Text style={{color:'#666'}}>@userID</Text>
                        </TouchableOpacity>
                    </Link>
                    <Text style={{marginEnd: 10, color: '#666'}}>•</Text>
                    <Text style={{marginEnd: 10, color: '#666'}}>2 hrs</Text>

                </View>
                <View style={styles.postTag}>
                    <TouchableOpacity onPress={()=>console.log('Post Tag Pressed')}><Text style={styles.tag}>Event</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>console.log('Post Tag Pressed')}><Text style={styles.tag}>Safety</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>console.log('Post Tag Pressed')}><Text style={styles.tag}>Lost&Found</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>console.log('Post Tag Pressed')}><Text style={styles.tag}>Community</Text></TouchableOpacity>
                </View>
                <Text style={styles.textContent}>This is a sample post text. It can be a short description or a longer message.</Text>
                <Image source={require("../images/dummyImg.jpg")} style={styles.postImg} />
                {/* POST ACTIONS */}
                <View style={styles.postActions}>
                    {/* Like button */}
                    <TouchableOpacity style={{marginRight: 10, flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require("../images/likes.svg")} style={styles.icon} />
                        <Text>999</Text>
                    </TouchableOpacity>
                    {/* Comment button */}
                    <Link href='../post_detail' asChild>
                        <TouchableOpacity style={{marginRight: 10, flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require("../images/comment.svg")} style={styles.icon} />
                            <Text>999</Text>
                        </TouchableOpacity>
                    </Link>
                    {/* Repost button */}
                    <TouchableOpacity style={{marginRight: 10, flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require("../images/repost.svg")} style={styles.icon} />
                        <Text>999</Text>
                    </TouchableOpacity>
                    {/* Share button */}
                    <TouchableOpacity>
                        <Image source={require("../images/share.svg")} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    </View>
);
}

const styles = StyleSheet.create({

    postContainer: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#D1D8DD',
    },

    post: {
        flexDirection: 'row',
        // marginTop: 20,
        width:'100%',
        justifyContent: 'center',
    },

    content:{
        width: '80%',
        padding: 15,
    },
    
    userProfile:{
        width: 50,
        height: 50,
        marginTop: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: '100%'
    },

    userInfo: {
        flexDirection: 'row',        
        marginBottom: 15
    },

    postTag:{
        fontSize: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        width: '100%',
        height: 20,
        // marginBottom: 15
    },

    tag:{
        backgroundColor: 'gray',
        borderRadius: 20,
        color: 'white',
        fontSize: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        padding: 5,
        marginEnd: 5,
        height: '100%',
        width: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 6,
        // paddingBottom: 2,
        marginBottom: 5,
    },

    textContent:{
        marginTop: 60,
        marginBottom: 35,    
    },

    postImg:{
        width: 200, 
        height: 150, 
        // justifyContent: 'center',
        // alignContent: 'center',
        // alignItems: 'center',

        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 30,
        resizeMode: 'cover' // Uncomment if you want to cover the entire area
    },

    postActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginTop: 10,
    },

    icon: {
        tintColor: 'gray',
        width: 15,
        height: 15,
        resizeMode: 'contain',
        marginRight: 5
        }
})

