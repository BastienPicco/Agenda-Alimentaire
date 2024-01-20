// App.js
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MealTracker from './screens/MealTracker';
import FoodManagement from './screens/FoodManagement';
import { initializeDatabase } from './actions/database'; // Mettez à jour l'importation

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    initializeDatabase();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MealTracker">
        <Stack.Screen name="MealTracker" component={MealTracker} />
        <Stack.Screen name="FoodManagement" component={FoodManagement} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
