import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {FeaturedItem} from '../../../data/data';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator';

interface Props {
  fruit: FeaturedItem;
}

export const FruitCardSale = ({fruit}: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <View className="mr-6">
      <TouchableOpacity
        className="flex-row justify-center -mb-9 z-20"
        onPress={() => navigation.navigate('ProductScreen', {product: fruit})}>
        <Image
          source={fruit.image}
          style={{width: 65, height: 65}}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View
        style={{backgroundColor: fruit.subtleColor, width: 80, height: 75}}
        className="rounded-3xl flex justify-end items-center">
        <Text className="font-semibold text-center text-gray-800 pb-3 tracking-wide">
          $ {fruit.price}
        </Text>
      </View>
    </View>
  );
};
