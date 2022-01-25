import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';



function SetUp() {
    const [text, setText] = useState('');
    const [food, setFood] = useState('');
    const [shopping, setShop] = useState('');
    const [travel, setTravel] = useState('');


    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.screen}>
                <Text>{'\n'}</Text>
                <Text style={styles.subtitle}>
                    Monthly Budget ($)
        </Text>
                <TextInput
                    placeholder="Enter Your Budget"
                    onChangeText={newText => setText(newText)}
                    defaultValue={'0'}
                    keyboardType={'numeric'}>
                </TextInput>
                <Text>{'\n'}</Text>
                <Text style={styles.subtitle}>
                    Remaining ($)
        </Text>
                <Text>
                    <Text>{'\n'}</Text>
                    {parseInt(text) - (food + shopping + travel)}
                </Text>
                <Text>{'\n'}</Text>
                <Text style={styles.subtitle}>Spent So Far ($)</Text>
                <Text>
                <Text>{'\n'}</Text>
                <Text>
                    {parseInt(food) + parseInt(shopping) + parseInt(travel)}
                </Text>
                </Text>
                <Text>{'\n'}</Text>
                <Text style={styles.title2}>Expenses</Text>
                <Text>{'\n'}</Text>
                <View style={{
                    flexDirection: 'row',
                    alignSelf: 'flex-start'
                }}>
                    <Text>{'\t'}</Text>

                    <Text>{'\t'}</Text>
                    <Text>{'\t'}</Text>
                    <Icon style={styles.icon}
                        name='fastfood' />
                    <Text>{'\t'}</Text>
                    <Text>{'\t'}</Text>
                    <Text>{'\t'}</Text>
                    <Text>{'\t'}</Text>
                    <TextInput placeholder="$0"
                        onChangeText={newFood => setFood(newFood)}
                        defaultValue={'0'}
                        keyboardType={'numeric'}></TextInput>

                </View>
                <Text>{'\n'}</Text>
                <View style={{
                    flexDirection: 'row',
                    alignSelf: 'flex-start'
                }}>

                    <Text>{'\t'}</Text>
                    <Text>{'\t'}</Text>
                    <Text>{'\t'}</Text>
                    <Icon style={styles.icon}
                        name='shopping-cart' />
                    <Text>{'\t'}</Text>
                    <Text>{'\t'}</Text>
                    <Text>{'\t'}</Text>
                    <Text>{'\t'}</Text>
                    <TextInput placeholder="$0"
                        onChangeText={newShop => setShop(newShop)}
                        defaultValue={'0'}
                        keyboardType={'numeric'}></TextInput>
                </View>
                <Text>{'\n'}</Text>
                <View style={{
                    flexDirection: 'row',
                    alignSelf: 'flex-start'
                }}>

                    <Text>{'\t'}</Text>
                    <Text>{'\t'}</Text>
                    <Text>{'\t'}</Text>
                    <Icon style={styles.icon}
                        name='airplanemode-on' />
                    <Text>{'\t'}</Text>
                    <Text>{'\t'}</Text>
                    <Text>{'\t'}</Text>
                    <Text>{'\t'}</Text>
                    <TextInput placeholder="$0"
                        onChangeText={newTravel => setTravel(newTravel)}
                        defaultValue={'0'}
                        keyboardType={'numeric'}></TextInput>
                </View>
            </View>
        </ScrollView>
    )
}
export default SetUp;

const styles = StyleSheet.create({
    screen: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    screen2: {
        alignItems: 'stretch'
    },
    title: {
        fontSize: 35,
        flex: 0.4
    },
    subtitle: {
        fontSize: 20
    },
    title2: {
        fontWeight: 'bold',
        fontSize: 20
    },
    icon: {
        alignSelf: 'flex-end'
    },
    scrollView: {
        backgroundColor: 'white',
        marginHorizontal: 25,
    },
});