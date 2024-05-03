import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Beranda from './Screens/Beranda'
import About from "./Screens/About";
import Homework from "./components/Homework"
import Aktivitas from './Screens/Aktivitas';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faInfo, faPersonRunning } from '@fortawesome/free-solid-svg-icons';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
       <Tabs.Navigator>
      <Tabs.Screen name="Beranda" component={Beranda} options={{headerShown:false, tabBarIcon:({color, size}) => (
        <FontAwesomeIcon icon={faHome} />
      )}} />
      <Tabs.Screen name="Aktivitas" component={Aktivitas} options={{headerShown:false, tabBarIcon:({color, size}) => (
        <FontAwesomeIcon icon={faPersonRunning} />
      )}} />
      <Tabs.Screen name="Tentang" component={About}  options={{headerShown:false, tabBarIcon:({color, size}) => (
        <FontAwesomeIcon icon={faInfo} />
      )}} />
    </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;