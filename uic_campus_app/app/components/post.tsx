import { Link } from "expo-router";
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


interface PostProps {
    post: {
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
    };
}

export default function Post({ post }: PostProps) {
    return ( 
        <View style={styles.postContainer}>
            <View style={styles.post}>
                <Link href='../user_profile' asChild>
                    <TouchableOpacity>
                        <Image style={styles.userProfile} source={require("../images/dummyImg.jpg")} />
                    </TouchableOpacity>
                </Link>
                <View style={styles.content}>
                    <View style={styles.userInfo}>
                        <Text style={{ marginEnd: 10, color: '#000', fontWeight: '600' }}>{post.user_id}</Text>
                        <Link href='../user_profile' asChild>
                            <TouchableOpacity style={{ marginEnd: 10 }}>
                                <Text style={{ color: '#666' }}>@{post.user_id}</Text>
                            </TouchableOpacity>
                        </Link>
                        <Text style={{ marginEnd: 10, color: '#666' }}>•</Text>
                        <Text style={{ marginEnd: 10, color: '#666' }}>{new Date(post.created_at).toLocaleTimeString()}</Text>
                    </View>
                    <View style={styles.postTag}>
                        {post.tags.map((tag, index) => (
                            <TouchableOpacity key={index} onPress={() => alert('Post Tag Pressed')}>
                                <Text style={styles.tag}>{tag}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <Text style={styles.textContent}>{post.content_text}</Text>
                    {post.media_url && <Image source={{ uri: post.media_url }} style={styles.postImg} />}
                    
                    {/* POST ACTIONS */}
                    <View style={styles.postActions}>
                        {/* Like button */}
                        <TouchableOpacity style={{ marginRight: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require("../images/likes.svg")} style={styles.icon} />
                            <Text>{post.likes_count}</Text>
                        </TouchableOpacity>
                        {/* Comment button */}
                        <Link href='../post_detail' asChild>
                            <TouchableOpacity style={{ marginRight: 10, flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require("../images/comment.svg")} style={styles.icon} />
                                <Text>{post.comments.length}</Text> {/* Assuming comments are an array */}
                            </TouchableOpacity>
                        </Link>
                        {/* Repost button */}
                        <TouchableOpacity style={{ marginRight: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require("../images/repost.svg")} style={styles.icon} />
                            <Text>999</Text> {/* Placeholder for repost count */}
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

