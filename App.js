import TabRoutes from "./src/routes/tab.routes";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, ThemeProvider } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "./src/screens/SignIn";
import { View } from "react-native";
const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme="light">
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="signin"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="signin" component={SignIn} />
          <Stack.Screen name="tabroutes" component={TabRoutes} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
