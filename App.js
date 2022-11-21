import SignUp from "./android/src/screens/SignUp";
import SignIn from "./android/src/screens/SignIn";
import Detail from "./android/src/screens/Detail";
import Search from "./android/src/screens/Search";
import Review from "./android/src/screens/Review";
import ProfileShop from "./android/src/screens/ProfileShop";
import ProfileProduct from "./android/src/screens/ProfileProduct";
import Home from "./android/src/screens/Home";
import Chat from "./android/src/screens/Chat";
import Payment from "./android/src/screens/Payment";
import Account from "./android/src/screens/Account";
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from "./RootNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const BotTab = createBottomTabNavigator();

function Bot () {
  return (
    <BotTab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel:false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === "Home") {
            iconName = focused ? 'home' : 'home-outline';

          } else if (rn === "Chat") {
            iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';

          } else if (rn === "Payment") {
            iconName = focused ? 'cart' : 'cart-outline';

          } else if (rn === "Account") {
            iconName = focused ? 'md-person' : 'md-person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={30} color={color}/>;
        },
        tabBarStyle: { backgroundColor: "#304B3B", height:70 }
      })}
      tabBarOptions={{
        activeTintColor: '#FDDE67',
        inactiveTintColor: 'white',
      }}>
      <BotTab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <BotTab.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
      <BotTab.Screen name="Payment" component={Payment} options={{ headerShown: false }} />
      <BotTab.Screen name="Account" component={Account} options={{ headerShown: false }} />
    </BotTab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="BotTab">
        <Stack.Screen name="Sign Up" component={SignUp} options={{ headerShown: false }}/>
        <Stack.Screen name="Sign In" component={SignIn} options={{ headerShown: false }}/>
        <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }}/>
        <Stack.Screen name="Search" component={Search} options={{ headerShown: false }}/>
        <Stack.Screen name="Review" component={Review} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile Shop" component={ProfileShop} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile Product" component={ProfileProduct} options={{ headerShown: false }}/>
        <Stack.Screen name="BotTab" component={Bot} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;