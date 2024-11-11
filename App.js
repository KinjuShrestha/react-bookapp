
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './app/home/screen/homestack';
import BorrowedScreen from './app/borrowed/screen/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BorrowedProvider } from './app/borrowed/screen/borrowedContext';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <BorrowedProvider>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack}
        options={{
          headerShown: false, 

          tabBarIcon: ({ size, color }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      
        
        />
        <Tab.Screen name="Borrowed" component={BorrowedScreen} 
        options={{
        
          tabBarIcon: ({ size, color }) => (
            <Icon name="book" size={size} color={color} />
          ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    </BorrowedProvider>
  );
}
