import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SetUp from './src/screens/SetUp';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
			headerStyle: {
				backgroundColor: '#228CDB'
			},
        	headerTintColor: '#fff'
    	}} initialRouteName="SetUp">
      <Stack.Screen name="Manage Your Finances!" component={SetUp} />
     
    </Stack.Navigator>
  </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
