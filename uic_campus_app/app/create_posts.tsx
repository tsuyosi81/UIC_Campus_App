import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function CreatePosts() {
  const [postText, setPostText] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [showTagDropdown, setShowTagDropdown] = useState(false);
  const [images, setImages] = useState<string[]>([]); // Added images state

  const tagOptions = ["News", "Event", "Question", "Lost&Found", "Announcement"];

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

  const handleAddImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImages([...images, result.assets[0].uri]); // Update images state
    }
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
        <Image source={require("../app/images/dummyImg.jpg")} style={styles.userProfile} />
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

          {showTagDropdown && (
            <View style={styles.showTagDropDown}>
              {tagOptions.map(option => (
                <TouchableOpacity
                  key={option}
                  onPress={() => handleAddTag(option)}
                  style={{ padding: 12}}
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

      {/* Text Input Area */}
      <TextInput
        style={{
          padding: 12,
          minHeight: "20%",
          textAlignVertical: "top",
          marginHorizontal: 16,
          marginBottom: 16
        }}
        multiline
        placeholder="What's on your mind?"
        value={postText}
        onChangeText={setPostText}
      />

      {/* Image Input Area */}
      <View style={{ paddingHorizontal: 16 }}>
        <View style={{ flexDirection: "row", marginBottom: 16 }}>
          {images.map((uri, idx) => (
            <Image
              key={idx}
              source={{ uri }}
              style={{ width: 80, height: 80, marginRight: 8, borderRadius: 8, backgroundColor: "#eee" }}
            />
          ))}
          <TouchableOpacity
            onPress={handleAddImage}
            style={{
              width: 80,
              height: 80,
              borderRadius: 8,
              backgroundColor: "#f0f0f0",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: "#ccc"
            }}
          >
            <Text style={{ fontSize: 32, color: "#888" }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  background: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  
  topBar: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", padding: 16, 
    borderBottomWidth: 1, 
    borderColor: "#eee" },

  profileImage: { 
    flexDirection: "row", 
    alignItems: "center", 
    padding: 16 },

  userProfile: { 
    width: 38, 
    height: 38, 
    borderRadius: 24, 
    marginRight: 12, 
    backgroundColor: "#eee" },

  tags: {

  },

  tagDropDown: { 
    borderWidth: 1, 
    borderColor: "#ccc", 
    borderRadius: 100, 
    padding: 5, 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between" },

  showTagDropDown: { 
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
  },


});
