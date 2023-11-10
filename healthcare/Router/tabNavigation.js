import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

import MainScreen from "../screans/MainScrean";
import DoctorsScreen from '../screans/DoctorsScrean';
import LoginScrean from '../screans/LoginScrean';
import RegisterScrean from "../screans/RegisterAsDoctor";
import Navigation from "./navigation";
import ProfileScreen from './../screans/ProfileScreen';
import PeopleList from "../screans/PeopleList"; 
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar, // Add custom tabBar styles here
        }}
      >
        <Tab.Screen
          name="Home"
          component={Navigation}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="logins"
          component={LoginScrean}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="log-in" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Main"
          component={MainScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="apps" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Doctors"
          component={DoctorsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="medical" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Chats"
          component={PeopleList}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="medical" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'black',
    borderTopColor: 'transparent',
    borderTopWidth: 0,
    borderRadius: 20,
    padding: 4,
    margin: 5,
    height: 50,
    color: '#45B3CB',
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 8,
  },
});

export default MyTabs;
