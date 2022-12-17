import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const StoryBookStack = createStackNavigator();

export const NavigationDecorator = ({ story, routeName }) => {
    console.log("story :", story());
    const Screen = () => story();
    return (
        <NavigationContainer /*independent={true}*/>
            <StoryBookStack.Navigator>
                <StoryBookStack.Screen
                    name={routeName}
                    component={Screen}
                    options={{ headerShown: false }}
                />
            </StoryBookStack.Navigator>
        </NavigationContainer>
    );
};