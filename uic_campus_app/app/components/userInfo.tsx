import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function UserInfo() {
  return (
    <View style={styles.container}>
    <View style={styles.userInfoContainer}>
        <Image source={require("../images/dummyImg.jpg")} style={styles.profile}></Image>
         <View style={styles.userInfo}>
            <Text style={{color: '#000', fontWeight: '700', fontSize: 16}}>User Name</Text>
            <Text style={{color:'#666', fontSize: 13}}>@userID</Text>
            <TouchableOpacity onPress={()=>console.log('college Major pressed')}><Text style={styles.major}>Computer Science</Text></TouchableOpacity>
        </View>
    </View>
    <View style={styles.bio}>
        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, aliquid iure. Consequuntur, possimus animi debitis quae inventore harum! Reiciendis voluptates exercitationem esse nemo at voluptatum culpa sit nostrum eos doloremque!</Text>
    </View>
    <View style={styles.followContainer}>
        <Text style={styles.follow}>10 Followings</Text>
        <Text style={styles.follow}>20 Followers</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 30,
        paddingHorizontal: 30,
        backgroundColor: '#fff'
    },

    userInfoContainer:{
        flexDirection: 'row',
    },
    profile:{
        width: 100,
        height: 100,
        borderWidth: 1,
        borderRadius: '100%',
        borderColor: '#ccc',
        marginEnd: 20

    },
    userInfo:{
        height:'95%',
        display: 'flex',
        justifyContent: 'space-between'


    },
    
    major:{
        backgroundColor: '#999',
        padding: 8,
        fontSize: 13,
        borderRadius: 20,
        fontWeight: 500
    },

    bio:{
        marginTop: 20,
        textAlign: 'center'
    },

    followContainer:{
        marginTop: 20,
        flexDirection: 'row',
        // justifyContent: 'space-evenly',
    },

    follow:{
        marginEnd: 20,
        fontWeight: 700
    },
})