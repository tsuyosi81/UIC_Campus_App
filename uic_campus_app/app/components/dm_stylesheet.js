import { StyleSheet } from 'react-native';

const DMStyles = StyleSheet.create({
  main: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
  },
  header: {
    marginLeft: 20,
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 24,
    letterSpacing: 1
  },
  mainContainer: {
    marginTop: 10
  },
  messageBoxContainer: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#D1D8DD",
    padding: 15
  },
  messageBoxTextContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 5,
    marginLeft: 15
  },
  userName: {
    fontSize: 14,
    fontWeight: "bold"
  },
  notificationsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    marginLeft: 80,
    gap: 5
  },
  notifications: {
    color: "#ffffff",
    backgroundColor: "#56636F",
    paddingVertical: 4,
    paddingHorizontal: 5,
    borderRadius: 50
  }
})

export default DMStyles;