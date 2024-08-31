import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {MenuTop} from '../../components/home';
import {colors} from '../../../config/theme/theme';

export const HomeScreen = () => {
  return (
    <View className="flex-1 bg-orange-50 my-1">
      <MenuTop />
      <View className="mt-4">
        <Text
          style={{color: colors.text}}
          className="text-2xl tracking-widest font-medium ml-5">
          Season
        </Text>
        <Text
          style={{color: colors.text}}
          className="text-3xl font-semibold ml-5">
          Fruits and Vegetables
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-8 px-5"></ScrollView>
      </View>
    </View>
  );
};
