import { Link } from 'expo-router';
import { onValue, ref } from "firebase/database";
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { database } from "./firebaseConfig"; // adjust path if needed

const communitiesInDB = ref(database, "communities");

type Community = {
  id: number;
  name: string;
  handle: string;
  background_image?: string;
  members_count: number;
  created_at: Date;
  short_description: string;
}

// const community4: Community = {
//   id: 4,
//   name: "Gun Club",
//   members_count: 30,
//   created_at: new Date("2030-08-25T09:00:00Z"),
//   short_description: "We Love Guns",
// };

// push(communitiesInDB, community4);

// const community2: Community = {
//   id: 2,
//   name: "Psychology Club",
//   members_count: 150,
//   created_at: new Date("2022-09-10T11:30:00Z"),
//   short_description: "A club for psychology students and enthusiasts to discuss theories, conduct research, and host guest speakers.",
// };

// const community3: Community = {
//   id: 3,
//   name: "Environmental Science Society",
//   members_count: 80,
//   created_at: new Date("2023-01-15T14:00:00Z"),
//   short_description: "A group dedicated to promoting sustainability and environmental awareness through projects and community outreach.",
// };

// push(communitiesInDB, community2)

// const ForYouCommunities : Community[] = [
//   community1, community2, community3,
// ]

export default function Community() {
  const [communities, setCommunities] = React.useState<Community[]>([]);
  React.useEffect(() => {
    const unsubscribe = onValue(communitiesInDB, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const dataArray: Community[] = Object.values(data).map((item: any) => ({
            id: item.id,
            handle: item.handle,
            name: item.name,
            background_image: item.string,
            members_count: item.members_count,
            created_at: new Date(item.created_at), 
            short_description: item.short_description,
          }));

          setCommunities(dataArray); 

          console.log("Current Task Entries:");
          dataArray.forEach(entry => {
            if (entry && entry.name) {
              console.log(entry.name);
            }
          });

        } else {
          console.error("No data available at this Firebase path.");
          setCommunities([]); 
        }
      });
    }, []); 

    // const forYouCommunities : Community[] = communities;


  return (
    <View style={styles.container}>
      <CardCategoryContainer category='For You' cards={communities}/>
      <CardCategoryContainer category='Other Groups' cards={communities}/>
      <Footer />
    </View>
  );
}

const Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>Footer Content</Text>
  </View>
);

const CardCategoryContainer = ({ category, cards }: { category: string; cards: Community[] }) => {

  return (
    <View style={styles.cardCategoryContainer}>
      <View style={styles.categoryHeader}>
        <Text style={styles.categoryTitle}>{category}</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardContainer}>
        {cards.map(card => (
          <Link 
            href={{
            pathname: "/communities/[id]" as any,
            params: {id: `${card.id}`}}
          }
           >
            <Card title={card.name} content={card.short_description} />
          </Link>
        ))}
      </ScrollView>
    </View>
  );
};

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