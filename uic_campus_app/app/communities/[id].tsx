import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";
import React from 'react';
import { router, Link, useLocalSearchParams} from 'expo-router';
import { ScrollView, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import BottomNavBar from "../components/bottomNavBar.tsx";
import Header from "../components/header.tsx";
import Post from "../components/post.tsx";
import PostBtn from "../components/postBtn.tsx";

const appSettings = { 
	databaseURL: "https://uic-campus-app-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const communitiesInDB = ref(database, "communities")

interface Post {
    post_id: number; // INT PRIMARY KEY AUTO_INCREMENT
    user_id: number; // INT NOT NULL
    community_id?: number | null; // INT DEFAULT NULL
    post_type: 'text' | 'photo' | 'video' | 'crime' | 'event' | 'date'; // ENUM with default 'text'
    content_text?: string; // TEXT
    media_url?: string; // VARCHAR(255)
    created_at: Date; // TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    likes_count: number; // Count of likes
    tags: string[]; // Array of tags
    comments: string[]; // Array of comments
}


//-----------------------------EXAMPLE POSTS--------------
const posts: Post[] = [
    {
        post_id: 1,
        user_id: 101,
        community_id: null,
        post_type: 'text',
        content_text: 'Hello, this is my first post!',
        media_url: undefined,
        created_at: new Date('2025-08-01T10:00:00Z'),
        likes_count: 10,
        tags: ['greeting', 'introduction'],
        comments: ['Welcome!', 'Nice to meet you!'],
    },
    {
        post_id: 2,
        user_id: 102,
        community_id: 201,
        post_type: 'photo',
        content_text: 'Check out this beautiful sunset!',
        media_url: 'http://example.com/sunset.jpg',
        created_at: new Date('2025-08-02T12:30:00Z'),
        likes_count: 25,
        tags: ['sunset', 'nature'],
        comments: ['Stunning view!', 'I love sunsets!'],
    },
    {
        post_id: 3,
        user_id: 103,
        community_id: 202,
        post_type: 'video',
        content_text: 'Watch my latest vlog!',
        media_url: 'http://example.com/vlog.mp4',
        created_at: new Date('2025-08-03T15:45:00Z'),
        likes_count: 50,
        tags: ['vlog', 'lifestyle'],
        comments: ['Great content!', 'Keep it up!'],
    },
    {
        post_id: 4,
        user_id: 104,
        community_id: null,
        post_type: 'event',
        content_text: 'Join us for a community cleanup event!',
        media_url: undefined,
        created_at: new Date('2025-08-04T09:00:00Z'),
        likes_count: 5,
        tags: ['community', 'cleanup'],
        comments: ['I will be there!', 'Count me in!'],
    },
    {
        post_id: 5,
        user_id: 105,
        community_id: 203,
        post_type: 'text',
        content_text: 'Just finished reading a great book!',
        media_url: undefined,
        created_at: new Date('2025-08-05T14:20:00Z'),
        likes_count: 15,
        tags: ['books', 'reading'],
        comments: ['What book?', 'I love reading too!'],
    },
    {
        post_id: 6,
        user_id: 106,
        community_id: null,
        post_type: 'crime',
        content_text: 'Witnessed something suspicious in the neighborhood.',
        media_url: undefined,
        created_at: new Date('2025-08-06T11:15:00Z'),
        likes_count: 8,
        tags: ['crime', 'safety'],
        comments: ['Stay safe!', 'What happened?'],
    },
];

type Community = {
  id: number;
  handle: string;
  name: string;
  members_count: number;
  created_at: Date;
  short_description: string;
}

export default function CommunityHome(){
  const [communities, setCommunities] = React.useState<Community[]>([]);
    const params = useLocalSearchParams<{id: string}>();
    React.useEffect(() => {
        const unsubscribe = onValue(communitiesInDB, (snapshot) => {
            if (snapshot.exists()) {
              const data = snapshot.val();
              const dataArray: Community[] = Object.values(data).map((item: any) => ({
                id: item.id,
                handle: item.handle,
                name: item.name,
                background_image: item.background_image,
                members_count: item.members_count,
                created_at: new Date(item.created_at), 
                short_description: item.short_description,
              }));
    
              setCommunities(dataArray); 
    
            //   console.log("Current Task Entries:");
            //   dataArray.forEach(entry => {
                // if (entry && entry.name) {
                //   console.log(entry.name);
                // }
            //   });
    
            } else {
              console.error("No data available at this Firebase path.");
              setCommunities([]); 
            }
          });
        }, []); 

        const community = communities.find(item => item.id === Number(params.id));
        if(!community){
            return <Text>Error</Text>
        }
    
        console.log(community);
    return (
        <View>
            
            <ScrollView style={{ flex: 1 }}>  
            <View style = {styles.communityDescContainer} >
                <View style = {styles.background}></View>
                <Text style = {styles.title}>{`${community.name}`}</Text>
                <Text style = {styles.handle}>{`@${community.handle}`}</Text>
                <Text style = {styles.desc}>{`${community.short_description}`}</Text>
                <View style = {styles.membersAndJoin}>
                    <View style = {styles.members}><Text>Members Icon</Text></View> 
                    <TouchableOpacity style = {styles.joinButton}><Text>Join</Text></TouchableOpacity> 
                </View>
            </View>  
            {
                posts.map(item => (
                    <Post key={item.post_id} post={item} />
                ))
            }
            </ScrollView>
            <PostBtn/>
            <BottomNavBar/>
        </View>
    )

}

const styles = StyleSheet.create({
    communityDescContainer: {
        padding: 16,
        backgroundColor: '#f9f9f9', // Light background for contrast
        // backgroundColor: 'red',
    },
    background: {
        height: 100,
        backgroundColor: '#e0e0e0', // Subtle background color
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333', // Dark text for title
        marginTop: 16,
    },
    handle: {
        fontSize: 16,
        color: '#666', // Lighter color for handle
        marginVertical: 4,
    },
    desc: {
        fontSize: 14,
        color: '#444',
        marginVertical: 8,
    },
    membersAndJoin: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
    },
    members: {
        flex: 1,
        padding: 8,
        backgroundColor: '#fff',

        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    joinButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#007bff', // Primary button color
        borderRadius: 4,
        alignItems: 'center',
    },
    joinButtonText: {
        color: '#fff', // White text for button
        fontWeight: 'bold',
    },
    membersCount: {
        fontSize: 14,
        color: '#333',
    },
});
