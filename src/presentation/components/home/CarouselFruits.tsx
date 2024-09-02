import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {featuredFruits} from '../../../data/data';
import {FruitCard} from './FruitCard';

export const CarouselFruits = () => {
  return (
    <View className="mt-8">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 20,}}>
        {featuredFruits.map((fruit, index) => (
          <FruitCard fruit={fruit} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};
