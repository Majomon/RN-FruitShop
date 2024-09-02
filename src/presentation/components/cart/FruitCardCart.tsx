import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {CartItems} from '../../../data/data';
import {RootStackParams} from '../../navigation/StackNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../../config/theme/theme';
import {MyIcon} from '../ui/MyIcon';

interface Props {
  fruit: CartItems;
}
export const FruitCardCart = ({fruit}: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <View className="flex-row justify-between items-center space-x-5 mb-5">
      <View className="ml-7">
        <TouchableOpacity className="flex-row -mb-10 -ml-6 shadow-lg z-20">
          <Image
            source={fruit.image}
            style={{width: 65, height: 65}}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View
          style={{backgroundColor: fruit.shadow, width: 60, height: 60}}
          className="rounded-3xl flex justify-end items-center"></View>
      </View>
      <View className="flex-1 space-y-1">
        <Text style={{color: colors.text}} className="text-base font-bold">
          {fruit.name}
        </Text>
        <Text className="text-yellow-500 font-extrabold">$ {fruit.price}</Text>
      </View>
      <View className="flex-row items-center space-x-2">
        <TouchableOpacity className="bg-gray-300 rounded-lg">
          <MyIcon name="add-outline" color="white" size={25} />
        </TouchableOpacity>
        <Text>{fruit.qty}</Text>
        <TouchableOpacity className="bg-gray-300 rounded-lg">
          <MyIcon name="remove-outline" color="white" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
