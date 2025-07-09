import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
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
    }
})

export default styles