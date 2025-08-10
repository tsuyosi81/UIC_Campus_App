import React, { useState } from "react";
import {ScrollView, Text, TouchableOpacity, View,} from "react-native";

import styles from "./components/css/interests_style";  
import LayoutStyles from "./components/css/layout_stylesheet"; // matches other layouts

const categories = [
  "Music",
  "Sports",
  "Technology",
  "Food",
  "Travel",
  "Art",
  "Fitness",
  "Gaming",
  "Fashion",
  "Photography",
  "Books",
  "Movies",
  "Science",
  "Health",
  "Education",
  "Nature",
  "History",
  "DIY",
  "Finance",
  "Comedy",
  "News",
  "Theater",
  "Animals",
  "Cars",
  "Spirituality",
  "Podcasts",
  "Coding",
  "Startups",
  "Languages",
  "Dance",
  "Politics",
  "Design",
  "Parenting",
  "Environment",
  "Memes",
  "Culture"
];


export default function Interest() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    if (selected.includes(category)) {
      setSelected(selected.filter((item) => item !== category));
    } else {
      setSelected([...selected, category]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.backArrow}>←</Text>
        <Text style={styles.title}>Select your interests</Text>
      </View>

      <ScrollView contentContainerStyle={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryButton,
              selected.includes(category) && styles.selectedCategory,
            ]}
            onPress={() => toggleCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selected.includes(category) && styles.selectedText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
