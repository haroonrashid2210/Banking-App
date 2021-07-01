import {StyleSheet} from 'react-native';
import {COLOR} from '../../Theme';

const STYLE = StyleSheet.create({
  container: {
    // display: 'flex',
    // flexDirection: 'column',
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'red',
  },
  topSection: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 50,
    paddingBottom: 50,
  },
  row2: {
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },

  icon: {
    backgroundColor: '#94D0F5',
    padding: 15,
    borderRadius: 15,
  },
  bottomSection: {
    backgroundColor: '#fff',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    top: -45,
    height: '100%',
  },
});

export default STYLE;
