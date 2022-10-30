import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//local imports
import Login from "./app/screens/Login";
import Signup from "./app/screens/Signup";
import AuthState from "./context/AuthState";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <AuthState>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="signup"
            component={Signup}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </AuthState>
    </NavigationContainer>
  );
}
