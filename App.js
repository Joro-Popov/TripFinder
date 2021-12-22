import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/components/navigation/MainNavigation.component.js';

function App() {
    return (
        <NavigationContainer>
            <View style={{flex: 1}}>
                <MainNavigation />
            </View>
        </NavigationContainer>
    );
}
export default App;
