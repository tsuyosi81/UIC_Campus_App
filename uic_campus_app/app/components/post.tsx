import { Link } from "expo-router";
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Comment from "../images/comment.svg";
import Likes from "../images/likes.svg";
import Repost from "../images/repost.svg";
import Share from "../images/share.svg";

interface PostProps {
    post: {
        post_id: number;
        user_id: number;
        community_id?: number | null;
        post_type: 'text' | 'photo' | 'video' | 'crime' | 'event' | 'date';
        content_text?: string;
        media_url?: string;
        created_at: Date;
        likes_count: number;
        tags: string[];
        comments: string[];
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
                        <Text style={styles.userId}>{post.user_id}</Text>
                        <Link href='../user_profile' asChild>
                            <TouchableOpacity>
                                <Text style={styles.username}>@{post.user_id}</Text>
                            </TouchableOpacity>
                        </Link>
                        <Text style={styles.dot}>•</Text>
                        <Text style={styles.time}>{new Date(post.created_at).toLocaleTimeString()}</Text>
                    </View>
                    {post.tags.length > 0 && (
                        <View style={styles.postTag}>
                            {post.tags.map((tag, index) => (
                                <TouchableOpacity key={index} onPress={() => alert('Post Tag Pressed')}>
                                    <Text style={styles.tag}>{tag}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )}
                    {post.content_text ? (
                        <Text style={styles.textContent}>{post.content_text}</Text>
                    ) : null}
                    {post.media_url && (
                        <Image source={{ uri: post.media_url }} style={styles.postImg} />
                    )}
                    <View style={styles.postActions}>
                        <TouchableOpacity style={styles.actionBtn}>
                            <Likes width={15} height={15} fill="#8F8F8F"/>
                            <Text>{post.likes_count}</Text>
                        </TouchableOpacity>
                        <Link href='../post_detail' asChild>
                            <TouchableOpacity style={styles.actionBtn}>
                                <Comment width={15} height={15} fill="#8F8F8F"/>
                                <Text>{post.comments.length}</Text>
                            </TouchableOpacity>
                        </Link>
                        <TouchableOpacity style={styles.actionBtn}>
                            <Repost width={15} height={15} fill="#8F8F8F"/>
                            <Text>999</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionBtn}>
                            <Share width={15} height={15} fill="#8F8F8F"/>
                            <Text>Share</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    postContainer: {
        width: '100%',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#D1D8DD',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    post: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
    },
    userProfile: {
        width: 48,
        height: 48,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: '#ccc',
        marginRight: 12,
        marginTop: 10,
    },
    content: {
        flex: 1,
        flexDirection: 'column',
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 4,
    },
    userId: {
        color: '#000',
        fontWeight: '600',
        marginRight: 6,
    },
    username: {
        color: '#666',
        marginRight: 6,
    },
    dot: {
        color: '#666',
        marginRight: 6,
    },
    time: {
        color: '#666',
        fontSize: 12,
    },
    postTag: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 5,
        marginBottom: 6,
    },
    tag: {
        backgroundColor: '#888',
        borderRadius: 12,
        color: 'white',
        fontSize: 11,
        paddingBottom: 2.5,
        paddingHorizontal: 8,
        marginRight: 5,
        marginBottom: 4,
    },
    textContent: {
        marginTop: 10,
        marginBottom: 8,
        fontSize: 15,
        color: '#222',
    },
    postImg: {
        width: '100%',
        height: 180,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        resizeMode: 'cover',
    },
    postActions: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
        justifyContent: 'space-between',
    },
    actionBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 18,
    },
    
});
