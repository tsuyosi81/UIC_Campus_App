import { StyleSheet } from 'react-native';

const DMStyles = StyleSheet.create({
  main: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between"
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#E3E8EB",
    height: 46,
    width: "auto",
    marginHorizontal: 20,
    marginTop: 0,
    marginBottom: 20,
    paddingLeft: 15,
    borderRadius: 25
  },
  textInput: {
    fontSize: 14,
    width: 273,
    height: 40
  },
  messageContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column", 
    margin: 20
  },
  senderContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    alignItems: "flex-end",
    marginBottom: 20
  },
  senderMessage: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#56636F",
    padding: 8,
    marginRight: 30,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 }
  },
  senderBody: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 78
  },
  senderTextMessage: {
    color: "#ffffff",
    fontSize: 16
  },
  senderTimestamp: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 2,
  },
  senderTextTimestamp: {
    color: "#ffffff",
    fontSize: 12
  },
  recipientContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: 20
  },
  recipientMessage: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ececec",
    padding: 8,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.01,
    shadowOffset: { width: 0, height: 1 }
  },
  recipientHeader: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 8,
    alignItems: "center" 
  },
  recipientName: {
    fontSize: 16,
    fontWeight: "bold"
  },
  recipientType: {
    fontSize: 13,
    color: "#767676"
  },
  recipientBody: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginRight: 56
  },
  recipientTextMessage: {
    color: "#000000",
    fontSize: 16,
  },
  recipientTimeStamp: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  recipientTimeStampText: {
    fontSize: 12,
    color: "#767676"
  },
  profileRecipient: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 }
  }
})

export default DMStyles;