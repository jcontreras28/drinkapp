import React, { useContext } from 'react';
import { 
    View, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    Button, 
    FlatList 
} from 'react-native';
import { ListItem } from "react-native-elements";
import { NavigationEvents } from 'react-navigation';
import { Context as DrinksContext } from '../context/DrinksContext';
const MainScreen = ({navigation}) => {
    const { state, getNonRedeemed } = useContext(DrinksContext);
    console.log('state: ', state);
    return (
        <View>
            <NavigationEvents onWillFocus={getNonRedeemed} />
            <Text>
                Main Page
            </Text>
            <Button 
                title="Buy Drink"
                onPress={() => navigation.navigate('BuyDrink')}
            />
            <FlatList
                data={state.drinks}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => {
                return (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('DrinkDetail', {item})
                        }    
                    >
                        <ListItem>
                            <ListItem.Content>
                                <ListItem.Title>{item.drinkName}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                    </TouchableOpacity>
                );
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default MainScreen;