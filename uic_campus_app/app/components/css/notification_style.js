import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        marginTop: 50,
        marginHorizontal: 0,
        alignItems: "center",
        justifyContent: "center",
        gap: 110
    },
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    tabContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 20,
        paddingBottom: 15,
        gap: 125,
        borderBottomWidth: 1,
        borderBottomColor: "#D1D8DD",
    },
    tabText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#56636F"
    },
    activeTabText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#000000",
        borderBottomWidth: 3,
        borderBottomColor: "#56636F",
    },
    notificationContainer: {
        display: "flex",
        flexDirection: "column",
    },
    alertNotification: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 30,
        paddingVertical: 30,
        gap: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#D1D8DD",
    },
    mentionNotification: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        paddingHorizontal: 30,
        paddingTop: 30,
        paddingBottom: 20,
        gap: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#D1D8DD",
    },
    mentionTop: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 15
    },
    mentionText: {
        marginHorizontal: 40
    },
    bold: {
        fontWeight: "bold"
    },
    grayed: {
        color: "#767676"
    }
})

export default styles