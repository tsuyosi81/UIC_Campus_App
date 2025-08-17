import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Dummy user profile image
const USER_PROFILE_URI = "https://via.placeholder.com/48";

export default function CreatePosts() {
  const [postText, setPostText] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [images, setImages] = useState<string[]>([]); // Placeholder for image URIs
  const [showTagDropdown, setShowTagDropdown] = useState(false);

  // Example tag options
  const tagOptions = ["News", "Event", "Question", "Lost&Found", "Announcement"];

  // Placeholder function for image picker
  const handleAddImage = () => {
    setImages([...images, "https://via.placeholder.com/100"]);
  };

  const handleAddTag = (tag?: string) => {
    const newTag = tag ? tag : tagInput.trim();
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setTagInput("");
      setShowTagDropdown(false);
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };

  return (
    <View style={styles.background}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Text style={{ color: "#007AFF", fontSize: 16 }}>Cancel</Text>
        </TouchableOpacity>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Create Post</Text>
        <TouchableOpacity>
          <Text style={{ color: "#007AFF", fontSize: 16 }}>Post</Text>
        </TouchableOpacity>
      </View>
      
      {/* Profile + Tag Select */}
      <View style={styles.profileImage}>
        <Image
          source={{ uri: USER_PROFILE_URI }}
          style={{ width: 38, height: 38, borderRadius: 24, marginRight: 12, backgroundColor: "#eee" }}
        />

        <View style={styles.tags}>
          <TouchableOpacity
            onPress={() => setShowTagDropdown(!showTagDropdown)}
            style={styles.tagDropDown}
          >
            <Text style={{ color: tags.length ? "#000" : "#888", marginLeft: 10 }}>
              {tags.length ? `#${tags.join(", #")}` : "Select tags"}
            </Text>
            <Text style={{ fontSize: 14, color: "#888", marginHorizontal: 10 }}>▼</Text>
          </TouchableOpacity>

          
          {/* Dropdown */}
          {showTagDropdown && (
            <View style={styles.showTagDropDown}>
              {tagOptions.map(option => (
                <TouchableOpacity
                  key={option}
                  onPress={() => handleAddTag(option)}
                  style={{ padding: 12 }}
                  disabled={tags.includes(option)}
                >
                  <Text style={{ color: tags.includes(option) ? "#aaa" : "#000" }}>
                    #{option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

        </View>

      </View>

      {tags.length > 0 && (
        <View style={{ flexDirection: "row", flexWrap: "wrap", paddingHorizontal: 16, marginBottom: 8 }}>
          {tags.map(tag => (
            <View
              key={tag}
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#e0e0e0",
                borderRadius: 16,
                paddingHorizontal: 12,
                paddingVertical: 4,
                marginRight: 8,
                marginBottom: 8
              }}
            >
              <Text>#{tag}</Text>
              <TouchableOpacity onPress={() => handleRemoveTag(tag)}>
                <Text style={{ marginLeft: 6, color: "#888" }}>×</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  background:{
    flex: 1,
    backgroundColor: '#fff',
  },

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  profileImage:{
    flexDirection: "row", 
    alignItems: "center", 
    padding: 16
  },

  tags:{
    // flex:1  
  },

  tagDropDown:{
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 100,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  showTagDropDown:{
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    zIndex: 10,
    elevation: 3
  }

})