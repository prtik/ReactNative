
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';


import { createStackNavigator } from '@react-navigation/stack';
import Routes from './src/navigation/Routes';
import LoginScreen from './src/screens/Login/View';
import { DashboardScreen } from './src/screens/DashBoard/View';
import { FinanceInfoScreen } from './src/screens/FinanceInfo/View';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store'; 
import { CategoryExpenseScreen } from './src/screens/CtegoryExpense/View';
import {  useSelector } from 'react-redux';

const Stack = createStackNavigator();

const App = () => {

  return (
 

     
      <NavigationContainer>
         <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
      
        <RootStack/>
        </PersistGate>
      
        </Provider>
      
     
    </NavigationContainer>


          
  );
}

export default App;

export function RootStack(){

  const income_amount = useSelector(state => state.incomeInfoReducer.amount);

  return (
    <Stack.Navigator initialRouteName= {
      income_amount === 0 ? Routes.LOGIN_SCREEN : Routes.DASHBOARD_SCREEN
      }>
      <Stack.Screen name= {Routes.LOGIN_SCREEN} component={LoginScreen} 
      options={{headerShown:false}}/>
      <Stack.Screen name= {Routes.DASHBOARD_SCREEN} component={DashboardScreen}
       options={{
        headerShown:true,
        title: "Dashboard",
        headerLeft: () => null,
       }} />
       <Stack.Screen name= {Routes.FINANCEINFO_SCREEN} component={FinanceInfoScreen}
       options={{headerShown:false}} />
       <Stack.Screen name= {Routes.CATEGORY_EXPENSE_SCREEN} component={CategoryExpenseScreen}
       options={{
        headerShown:true,
        title: "Add Expenses"
        }} />
    </Stack.Navigator>
  );

}

