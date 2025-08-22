
import { getApps, initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import React from 'react';
import { ScrollView, StyleSheet } from "react-native";
import BottomNavBar from "./components/bottomNavBar.tsx";
import Header from "./components/header.tsx";
import Post from "./components/post.tsx";
import PostBtn from "./components/postBtn.tsx";

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




const appSettings = { 
	databaseURL: "https://playground-b6d70-default-rtdb.firebaseio.com/"
}

let app;
if (!getApps().length) {
     app = initializeApp(appSettings);
}
else{app = getApps()[0];}
const database = getDatabase(app)
const communitiesInDB = ref(database, "posts")

export default function SocialFeed() {
  return (  
    <>
        <Header/>
        <ScrollView style={styles.feed}>
        {
            posts.map(item => (
                <Post key={item.post_id} post={item} />
            ))
        }
        </ScrollView>
        <PostBtn/>
        <BottomNavBar/>
    </>
  );
}

const styles = StyleSheet.create({
    feed:{},
    postBtn:{},
})

