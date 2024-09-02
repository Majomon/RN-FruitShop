import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {RootStackParams} from '../../navigation/StackNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {MyIcon} from '../../components/ui/MyIcon';
import {colors} from '../../../config/theme/theme';
import {cartItem} from '../../../data/data';
import {FruitCardCart} from '../../components/cart/FruitCardCart';

export const CartScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  return (
    <View className="flex-1 flex justify-between bg-orange-50">
      <View className="mt-2 flex-row justify-start mx-5">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="border border-gray-300 rounded-xl">
          <MyIcon name="chevron-back-outline" color="gray" />
        </TouchableOpacity>
      </View>
      <View className="flex-1 mx-5">
        <Text style={{color: colors.text}} className="text-2xl py-10">
          Your <Text className="font-bold">cart</Text>
        </Text>
        <View>
          {cartItem.map((fruit, index) => (
            <FruitCardCart key={index} fruit={fruit} />
          ))}
        </View>
        <View className="flex-row justify-end py-4">
          <Text className="text-lg">
            Total price:{' '}
            <Text className="font-bold text-yellow-500">420.8</Text>
          </Text>
        </View>
        <View className="flex-row justify-center mx-7">
          <TouchableOpacity
            style={{
              backgroundColor: 'orange',
              opacity: 0.8,
            }}
            className="flex-1 p-3 rounded-xl">
            <Text className="text-xl text-center text-white font-bold">
              Payment
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
