import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {ProductsScreen} from '../screens/products/ProductsScreen';
import {FeaturedItem} from '../../data/data';

export type RootStackParams = {
  HomeScreen: undefined;
  ProductScreen: {product: FeaturedItem};
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductScreen" component={ProductsScreen} />
    </Stack.Navigator>
  );
};
