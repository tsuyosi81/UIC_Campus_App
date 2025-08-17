import { StyleSheet } from 'react-native';

const LayoutStyles = StyleSheet.create({
  dmHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  dmMessageHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  containerDM: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15
  },
  containerMessage: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    gap: 15
  },
  textContainer: {
    display: 'flex',
    gap: 1,
    maringLeft: -10
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
    gap: 5,
    backgroundColor: "#E3E8EB",
    height: 31,
    width: 273,
    margin: 25,
    marginHorizontal: 15,
    paddingLeft: 15,
    borderRadius: 25
  }
})

export default LayoutStyles;