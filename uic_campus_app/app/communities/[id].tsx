import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";
import React from 'react';
import { router, Link, useLocalSearchParams} from 'expo-router';
import { ScrollView, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
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
            return <Text>Error, Cannot Find Community</Text>
        }
    
        console.log(community);
    return (
            <ScrollView style={{ flex: 1 }}>  
            <CommunityHeader community={community}/>
            {
                posts.map(item => (
                    <Post key={item.post_id} post={item} />
                ))
            }
            </ScrollView>
    )

}

interface CommunityHeaderProps {
    community: Community;
}

const CommunityHeader: React.FC<CommunityHeaderProps> = ({ community }) => {
    return (
        <View style={styles.communityDescContainer}>
            <View style={styles.background}></View>
            <View style={styles.communityInfoContainer}>
                <Text style={styles.title}>{community.name}</Text>
                <Text style={styles.handle}>{`@${community.handle}`}</Text>
                <Text style={styles.desc}>{community.short_description}</Text>
                <View style={styles.membersAndJoin}>
                    <View style={styles.membersContainer}>
                        <View style={styles.membersIconContainer}>
                            <Image source={require("../images/profile.png")}
                            style={styles.memberIcon} />
                            <Image source={require("../images/profile.png")}
                            style={styles.memberIcon} />
                            <Image source={require("../images/profile.png")}
                            style={styles.memberIcon} />
                        </View>
                        <Text  style={styles.memberText}>0 members</Text>
                    </View> 
                    <TouchableOpacity style={styles.joinButton}>
                        <Image source={require("../images/join.png")}
                        style={styles.joinIcon} />
                        <Text style={styles.joinButtonText}>Join</Text></TouchableOpacity> 
                </View>
            </View>
        </View>  
    );
};

const styles = StyleSheet.create({
    communityDescContainer: {
        backgroundColor: '#fff',
    },
    background: {
        height: 100,
        backgroundColor: '#e0e0e0', 
    },
    communityInfoContainer:{
        padding: 16,
        borderBottomColor: '#e2e2e2ff',
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333', 
    },
    handle: {
        fontSize: 16,
        color: '#666', 
    },
    desc: {
        fontSize: 14,
        color: '#444',
    },
    membersAndJoin: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 32,
    },
    membersContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    membersIconContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
    },
    memberIcon: {
        width: 40, 
        height: 40, 
    },
    memberText: {
        marginTop: -6, 
        marginLeft: 10,
    },
    joinButton: {
        padding: 10,
        backgroundColor: '#56636F', 
        width: 74,
        borderRadius: 8,
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center',
    },
    joinIcon: {
        
    },
    joinButtonText: {
        color: '#fff',
        marginTop: -2, 
    },
    membersCount: {
        fontSize: 14,
        color: '#333',
    },
});
