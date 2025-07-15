
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Community() {

  return (
    <View style={styles.container}>
      <CardCategoryContainer category='For You' posts={forYouPosts}/>
      <CardCategoryContainer category='Other Groups' posts={forYouPosts}/>
      <Footer />
    </View>
  );
}

const Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>Footer Content</Text>
  </View>
);

type Post = {
  id: number;
  title: string;
  content: string;
};

const forYouPosts: Post[] = [
  { id: 1, title: 'Post 1', content: 'This is the content of post 1' },
  { id: 2, title: 'Post 2', content: 'This is the content of post 2' },
  { id: 3, title: 'Post 3', content: 'This is the content of post 3' },
  { id: 4, title: 'Post 4', content: 'This is the content of post 4' },
  { id: 5, title: 'Post 5', content: 'This is the content of post 5' },
];

const CardCategoryContainer = ({ category, posts }: { category: string; posts: Post[] }) => (
  <View style={styles.cardCategoryContainer}>
        <View style={styles.categoryHeader}>
          <Text style={styles.categoryTitle}>{category}</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardContainer}>
          {posts.map(post => (
            <Card key={post.id} title={post.title} content={post.content} />
          ))}
        </ScrollView>
      </View>
)

const Card = ({ title, content }: { title: string; content: string }) => (
  <View style={styles.card}>
    <View style={styles.cardImage}></View>
    <View style={styles.cardInfoContainer}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardContent}>{content}</Text>
    </View>
  </View>

  
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  footer: {
    padding: 20,
    backgroundColor: '#ff4500',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footerText: {
    color: '#fff',
    textAlign: 'center',
  },
  cardCategoryContainer: {
  },
  categoryHeader: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: 10,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewAll: {
    fontWeight: 'bold',
  },
  cardContainer: {
    
    paddingBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 10,
    width: 300,
    height: 300,
    overflow: 'hidden',

    //shadow
    elevation: 3,
    shadowColor: '#000', 
    shadowOffset: {
      width: 0, 
      height: 4, 
    },
    shadowOpacity: 0.25,
    shadowRadius: 4, 
  },
  cardImage:{
    width: 300,
    height: 120,
    backgroundColor: '#555',
  },
  cardInfoContainer:{
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardContent: {
    fontSize: 14,
    color: '#555',
  },
});