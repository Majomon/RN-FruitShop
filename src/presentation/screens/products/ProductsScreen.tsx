import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParams} from '../../navigation/StackNavigator';
import {MyIcon} from '../../components/ui/MyIcon';

interface Props extends StackScreenProps<RootStackParams, 'ProductScreen'> {}

export const ProductsScreen = ({route, navigation}: Props) => {
  let fruit = route.params.product;
  return (
    <View className="flex-1" style={{backgroundColor: fruit.subtleColor}}>
      <View className="mt-2 flex-row justify-start mx-5">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="border border-gray-50 rounded-xl"
          style={{backgroundColor: 'rgba(255,255,255,0.2)'}}>
          <MyIcon name="chevron-back-outline" color="white" />
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center mt-5 pb-10">
        <Image source={fruit.image} style={{width: 290, height: 290}} />
      </View>
    </View>
  );
};
