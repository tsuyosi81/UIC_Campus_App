import  { StyleSheet } from 'react-native'

const LayoutStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    fontFamily: 'WorkSans-VariableFont_wght',
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
})

export default LayoutStyles;