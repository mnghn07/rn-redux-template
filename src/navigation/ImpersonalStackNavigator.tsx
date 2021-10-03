import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  LoginScreen,
  RegisterScreen,
  WelcomeScreen,
  SettingScreen,
} from "containers";

const Stack = createNativeStackNavigator();

const ImpersonalStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="Setting"
          component={SettingScreen}
          options={{ headerBackVisible: true }}
        />
      </Stack.Group>
      <Stack.Group
        screenOptions={{ presentation: "modal", gestureEnabled: true }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default ImpersonalStackNavigator;
