import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MyIcon} from '../ui/MyIcon';

interface RatingProps {
  star: number;
  maxStars?: number;
  color?: string;
  colorEmptry?: string;
  size?: number;
}

export const StartRating = ({
  star,
  color = '#FFD700',
  colorEmptry = 'lightgray',
  maxStars = 5,
  size = 24,
}: RatingProps) => {
  const filledStars = Math.floor(star);
  const halfStar = star - filledStars >= 0.5;
  const emptyStars = maxStars - filledStars - (halfStar ? 1 : 0);

  return (
    <View style={styles.container}>
      {[...Array(filledStars)].map((_, index) => (
        <MyIcon key={`filled-${index}`} name="star" size={size} color={color} />
      ))}
      {halfStar && (
        <MyIcon key="half" name="star-half-outline" size={size} color={color} />
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <MyIcon
          key={`empty-${index}`}
          name="star-outline"
          size={size}
          color={colorEmptry}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop:10
  },
});
