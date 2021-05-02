import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const HistoryScreen = ({navigation}) => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text>
                History Page
            </Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({});

export default HistoryScreen;