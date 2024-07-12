import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, Button, Image} from 'react-native';
import Screen1 from '../componenets/screen1';
import Screen2 from '../componenets/screen2';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowIcon:false,
        // tabBarLabelStyle: { fontSize: 12 },
        // tabBarItemStyle: { width: 100 },
        // tabBarStyle: { 
        //     backgroundColor: '#1EFA03',
        //     borderTopWidth: 1, // Set the border width
        //     borderTopColor: '#1EFA03', // Set the border color
        //     borderRadius:100,
        //     margin:20,
        //     height:50,
            

        //   },
        //   tabBarGap:0,
        tabBarIcon: ({focused, color, size}) => {
          console.log(focused);
          let iconName;
          if (route.name === 'Home2') {
            iconName = 'home';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          }
          if (route.name === 'Home3') {
            iconName = 'home';
          }

          return (
            <Ionicons
              name={iconName}
              size={focused ? 25 : 20}
              color={focused ? 'black' : 'grey'}
            />
          );
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}>
    
      <Tab.Screen name="Home2" component={Screen1} />
      <Tab.Screen name="Home3" component={Screen1} />
      <Tab.Screen name="Settings" component={Screen2} />
    </Tab.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TabNav}
          options={{
            headerShown: false,
          }}
          //   options={{

          //     headerTitle: props => <Text>Logo</Text>,
          //     headerRight: () => (
          //       //   <Button
          //       //     onPress={() => alert('This is a button!')}
          //       //     title="Info"
          //       //     color="#fff"
          //       //   />
          //       <Text>Hello</Text>
          //     ),
          //   }}
        />
        <Stack.Screen name="Screen" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
