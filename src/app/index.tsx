import {NavigationContainer} from '@react-navigation/native';
import Home from '../modules/home/containers/HomeContainer';
import Shop from '../modules/shop/containers/ShopContainer';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function index() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Shop" component={Shop} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
