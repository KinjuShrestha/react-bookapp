
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BookDetailScreen from './bookdetail/index';
import HomeScreen from './index';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BooksList" component={HomeScreen} options={{ title: 'Books List' }} />
      <Stack.Screen name="BookDetail" component={BookDetailScreen} options={{ title: 'Book Detail' }} />
    </Stack.Navigator>
  );
}
