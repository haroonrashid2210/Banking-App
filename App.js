import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Style
import {COLOR} from './src/Theme';

// Screens
import Login from './src/screens/Login/Login';
import Payments from './src/screens/Payments/Payments';
import Home from './src/screens/Home/Home';
import Profile from './src/screens/Profile/Profile';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Login} />
          <Stack.Screen name="HomeTabs" component={HomeTabs} />
          {/* <Stack.Screen name="Settings" component={Settings} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Payments') {
            iconName = focused ? 'time' : 'time-outline';
          } else if (route.name === 'More')
            iconName = focused ? 'person' : 'person-outline';

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={30} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: COLOR.primary,
        inactiveTintColor: 'gray',
        style: {
          height: 70,
        },
        showLabel: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Payments" component={Payments} />
      <Tab.Screen name="More" component={Profile} />
    </Tab.Navigator>
  );
}

export default App;
