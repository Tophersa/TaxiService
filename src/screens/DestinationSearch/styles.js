import { StyleSheet } from 'react-native';
import COLOURS from '../../../assets/utilities/COLOURS';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
    backgroundColor: "white"
  },
  textInput: {
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 5,
    marginLeft: 25,
    height: 50,
    borderRadius: 5
  },

  separator: {
    backgroundColor: COLOURS.lightBlue,
    height: 1,
  },
  listView: {
    position: 'absolute',
      top: 105,
  },
  autocompleteContainer: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconContainer: {
    backgroundColor:COLOURS.primary,
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
  },
  locationText: {

  },

  circle: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 20,
    left: 15,

  },
  square: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 80,
    left: 15,
  },
});

export default styles;