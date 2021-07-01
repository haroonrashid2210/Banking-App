import {StyleSheet} from 'react-native';

export const COLOR = {
  primary: '#4A3878',
};

export const THEME = {
  LIGHT: {
    primary: '#4A3878',
    background: '#fff',
    text: '#333',
  },
  DARK: {
    primary: '#4A3878',
    background: '#333',
    text: '#eee',
  },
};

export const STYLE = {
  LOGIN_SCREEN: StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    buttonLogin: {
      backgroundColor: COLOR.primary,
    },
    buttonRegister: {
      borderBottomColor: COLOR.primary,
    },

    label: {
      width: '100%',
      textAlign: 'left',
      marginLeft: 20,
      marginBottom: 5,
    },
  }),
};
