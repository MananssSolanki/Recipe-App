import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from './assets/screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverViewScreen from './assets/screens/MealsOverviewScreen';
import MealDetailScreen from './assets/screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer

      >
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
          }}
        >
          <Stack.Screen name='MealsCategories' component={CategoriesScreen}
          
          options={{
            title:'All Categories'
          }}
          />
          <Stack.Screen name='MealsOverView' component={MealsOverViewScreen}
          // options={({route , navigation})=>{
          //   const catId = route.params.categoryId;
          //   return{
          //     title : catId
          //   };
          // }}
          />
          <Stack.Screen name='MealDetails' component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});
