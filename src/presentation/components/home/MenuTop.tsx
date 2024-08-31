import React from 'react';
import {Pressable, View} from 'react-native';
import {MyIcon} from '../ui/MyIcon';

export const MenuTop = () => {
  return (
    <View className="mx-5 flex-row justify-between items-center">
      <MyIcon name="menu-outline" />
      <Pressable onPress={() => {}} className="p-2 rounded-xl bg-orange-100">
        <MyIcon name="cart" color="orange" />
      </Pressable>
    </View>
  );
};
