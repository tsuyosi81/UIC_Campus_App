import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    paddingTop: 60,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  backArrow: {
    position: "absolute",
    left: 0,
    top: 0,
    fontSize: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: 0,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#E0E0E0",
    margin: 5,
  },
  selectedCategory: {
    backgroundColor: "#4F4F4F",
  },
  categoryText: {
    fontSize: 20,
    color: "#000",
  },
  selectedText: {
    color: "#fff",
  },
  continueButton: {
    marginTop: 20,
    backgroundColor: "#4F4F4F",
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: "center",
  },
  continueText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
