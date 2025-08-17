import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 90,
  },


  header: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 100,
  },
  backArrow: {
    position: "absolute",
    left: 0,
    top: -130,
    fontSize: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  formContainer: {
    paddingBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: "#f5f5f5",
  },
  continueButton: {
    backgroundColor: "#4F4F4F",
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  disabledButton: {
    backgroundColor: "#999",
  },
  continueText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
