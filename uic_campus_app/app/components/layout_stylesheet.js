import { StyleSheet } from 'react-native';

const LayoutStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: -8
  },
  textContainer: {
    display: 'flex',
    gap: 1,
    marginLeft: 10
  },
  nameText: {
    fontSize: 14
  },
  userNameText: {
    fontSize: 12,
    color: "#767676"
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#E3E8EB",
    height: 31,
    width: 273,
    margin: 25,
    marginHorizontal: 20,
    paddingLeft: 15,
    borderRadius: 25
  }
})

export default LayoutStyles;