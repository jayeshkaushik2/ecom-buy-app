import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";

//local imports
import Login from "./app/screens/Login";
import Signup from "./app/screens/Signup";
import AuthState from "./context/AuthState";
import Home from "./app/screens/Home";
import VerifyNewUserOtp from "./app/screens/VerifyNewUserOtp";
import ForgotPassword from "./app/screens/ForgotPassword";
import VerifyForgotPassOtp from "./app/screens/VerifyForgotPassOtp";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <PaperProvider>
      <NavigationContainer>
        <AuthState>
          {/* AUthentication pages start */}
          <Stack.Navigator initialRouteName="home">
            <Stack.Screen
              name="login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="forgot_password"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="verify_forgotpass_otp"
              component={VerifyForgotPassOtp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="signup"
              component={Signup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="verify_newuser_otp"
              component={VerifyNewUserOtp}
              options={{ headerShown: false }}
            />
            {/* Authentication pages end */}
            <Stack.Screen
              name="home"
              component={Home}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </AuthState>
      </NavigationContainer>
    </PaperProvider>
  );
}
