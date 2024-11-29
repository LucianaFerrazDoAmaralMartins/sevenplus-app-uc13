import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import PasswordScreen from "./screens/PasswordScreen";

// import PlanScreen from "./screens/PlanScreen";
// import RegisterScreen from "./screens/RegisterScreen";
 
const Stack = createStackNavigator();
 
class App extends Component {
  render() {
    return (
      <NavigationContainer>
 
        <Stack.Navigator initialRouteName="Home">
 
          <Stack.Screen name="Home" component={ HomeScreen } options={{headerShown:false}} />
          <Stack.Screen name="Login" component={ LoginScreen } options={{headerShown:false}}/> 
          <Stack.Screen name="Password" component={ PasswordScreen } options={{headerShown:false}}/> 
          {/* <Stack.Screen name="Plan" component={ PlanScreen } options={{headerShown:false}}/> */}
          {/* <Stack.Screen name="Register" component={ RegisterScreen } options={{headerShown:false}}/> */}
 
        </Stack.Navigator>
 
      </NavigationContainer>
    );
  }
}
 
export default App;
