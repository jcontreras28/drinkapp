import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const FriendsScreen = ({navigation}) => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text>
                Friends Screen
            </Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({});

export default FriendsScreen;