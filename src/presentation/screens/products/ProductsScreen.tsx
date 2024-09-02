import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParams} from '../../navigation/StackNavigator';
import {MyIcon} from '../../components/ui/MyIcon';
import {colors} from '../../../config/theme/theme';

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
        <Image
          source={fruit.image}
          style={{width: 290, height: 290}}
          resizeMode="contain"
        />
      </View>
      <View
        className="flex-1 bg-orange-50 px-6 space-y-2"
        style={{borderTopLeftRadius: 45, borderTopRightRadius: 45}}>
        <Text className="mt-8 text-2xl font-bold" style={{color: colors.text}}>
          {fruit.name}
        </Text>
        <View className="flex-row justify-between">
          <Text className="text-gray-500 font-semibold">{fruit.desc}</Text>
          <Text className="text-gray-500 font-semibold">
            Sold <Text className="text-gray-800 font-extrabold">239</Text>
          </Text>
        </View>
        <View style={{height: 165}}>
          <Text style={{color: colors.text}} className="tracking-wider py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, animi
            rem doloribus error, dolore fugit facilis vero iste mollitia illo
            sit, unde voluptas totam. Dolorum quod nisi ut! Ducimus, accusamus!
          </Text>
        </View>
      </View>
    </View>
  );
};
