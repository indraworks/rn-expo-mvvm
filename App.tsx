import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/views/home/Home";
import { RegisterScreen } from "./src/views/register/Register";
import { RootStackParamList } from "./src/@type/RootStackParam";

const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
  return (
    <NavigationContainer>
      {/* stack Navigator showOption 
          kalau stackScreen option
      */}
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown: true,
            title: "New User",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
