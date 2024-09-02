import React, {useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {MenuTop} from '../../components/home';
import {colors} from '../../../config/theme/theme';
import {categoriesFruits, featuredFruits} from '../../../data/data';
import {CarouselFruits} from '../../components/home/CarouselFruits';
import {FruiCardSale} from '../../components/home/FruiCardSale';

export const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState('Naranjas');
  return (
    <ScrollView className="flex-1 bg-orange-50 my-1">
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
          className="mt-8 px-5">
          {categoriesFruits.map((category, index) => {
            let isActive = category == activeCategory;
            let textClass = `text-xl ${isActive ? 'font-bold' : ''}`;

            return (
              <Pressable
                key={index}
                className="mr-8 relative"
                onPress={() => setActiveCategory(category)}>
                <Text className={textClass} style={{color: colors.text}}>
                  {category}
                </Text>
                {isActive ? (
                  <Text className="font-extrabold text-orange-400 -mt-3 ml-2">
                    __ _
                  </Text>
                ) : null}
              </Pressable>
            );
          })}
        </ScrollView>
        {/* Carousel */}
        <CarouselFruits />
        {/* Hot sales */}
        <View className="mt-8 pl-5 space-y-1">
          <Text className="text-xl font-bold" style={{color: colors.text}}>
            Hot Sales
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{overflow: 'visible'}}>
            {[...featuredFruits].reverse().map((fruit, index) => (
              <FruiCardSale fruit={fruit} key={index} />
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};
