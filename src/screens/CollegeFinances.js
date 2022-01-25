// import React from 'react';
// import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// const Stack = createStackNavigator();

// export default function CollegeFinances () {
    
//   return (
//     <View  style={styles.screen}>
//         <Text style={styles.title}>I am a...</Text>
//       <TouchableOpacity style={styles.roundButton}><Text>
//           College Student
//           </Text></TouchableOpacity>
//       <TouchableOpacity style={styles.roundButton}><Text>
//           Young Professional
//           </Text></TouchableOpacity>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     screen: {
//       flex: 0.8,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     title:{
//         fontSize: 80
//     },
//     roundButton: {
//       marginTop: 20,
//       width: 150,
//       height: 150,
//       justifyContent: 'center',
//       alignItems: 'center',
//       padding: 10,
//       borderRadius: 100,
//       backgroundColor: '#228CDB',
//     },
//   });


import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
function SetUp() {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>My Budget Planner</Text>
            <Text style={styles.subtitle}>
                Monthly Budget ($)
        </Text>
            <TextInput style={{ height: 40, }}
                placeholder="0($)"
                onChangeText={newText => setText(newText)}
                defaultValue={'0'}>
            </TextInput>
            <Text>{'\n'}</Text>
        </View>
    )
}
export default SetUp;

const styles = StyleSheet.create({
    screen: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        flex: 0.4
    },
    subtitle: {
        fontSize: 25
    }
});
