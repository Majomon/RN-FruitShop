import React from 'react';
import {Pressable, View} from 'react-native';
import {MyIcon} from '../ui/MyIcon';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigator';



export const MenuTop = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <View className="mx-5 flex-row justify-between items-center">
      <MyIcon name="menu-outline" />
      <Pressable onPress={() => navigation.navigate("CartScreen")} className="p-2 rounded-xl bg-orange-100">
        <MyIcon name="cart" color="orange" />
      </Pressable>
    </View>
  );
};
