import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {FeaturedItem} from '../../../data/data';
import {RadialGradient} from 'react-native-gradients';
import {MyIcon} from '../ui/MyIcon';

interface Props {
  fruit: FeaturedItem;
}

export const FruitCard = ({fruit}: Props) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const colorList = [
    {offset: '0%', color: fruit.shadow, opacity: '1'},
    {offset: '100%', color: fruit.subtleColor, opacity: '1'},
  ];

  return (
    <View
      style={{
        width: 270,
        borderRadius: 40,
        position: 'relative',
        overflow: 'hidden',
      }}
      className="mr-5">
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
        }}>
        <RadialGradient
          x="50%"
          y="50%"
          rx="70%"
          ry="70%"
          colorList={colorList}
        />
      </View>
      <View className="flex-row justify-end">
        <Pressable
          onPress={() => setIsFavourite(!isFavourite)}
          className="rounded-full mr-4 mt-4 p-2"
          style={{backgroundColor: 'rgba(255,255,255,0.3)'}}>
          <MyIcon name="heart" color={isFavourite ? fruit.shadow : 'white'} />
        </Pressable>
      </View>
      <View className="flex-row justify-center pt-6">
        <Image
          source={fruit.image}
          style={{width: 180, height: 160}}
          resizeMode="contain"
        />
      </View>
      <View className="ml-4 my-5">
        <Text className="font-bold text-xl text-white shadow">
          {fruit.name}
        </Text>
        <Text className="font-bold text-lg text-white shadow tracking-wide">
          $ {fruit.price}
        </Text>
      </View>
    </View>
  );
};
