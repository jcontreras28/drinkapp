import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { requestPermissionsAsync } from 'expo-location';

import Map from '../components/Map';


const DrinkDetailScreen = ({ navigation}) => {
  const drink = navigation.getParam('item');
  console.log('drink: ', drink);  
  const [err, setErr] = useState(null);

    const startWatching = async () => {
        try {
          const { granted } = await requestPermissionsAsync();
          if (!granted) {
            throw new Error('Location permission not granted');
          }
        } catch (e) {
          setErr(e);
        }
      };

    useEffect(() => {
        startWatching();
    }, []);

    return (
        <SafeAreaView forceInset={{ top: 'always'}}>
            <Text h3>Drink Detail</Text>
            <Text h3>location image should go here</Text>
            <Text>{drink.drinkName} at {drink.restaraunt}</Text>
            <Text>from {drink.purchaserName}</Text>
            <Text>because:  {drink.reason}</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null }
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default DrinkDetailScreen;