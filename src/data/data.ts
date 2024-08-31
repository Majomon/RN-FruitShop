export const categories: string[] = [
  'Orange',
  'Bananas',
  'Pineapple',
  'Apple',
  'Cherry',
];

interface FeaturedItem {
  name: string;
  price: string;
  star: number;
  desc: string;
  shadow: string;
  image: any;
  color: (opacity: number) => string;
}

const featuredFruits: FeaturedItem[] = [
  {
    name: 'Manzana',
    price: '1.50',
    star: 4.5,
    desc: 'Una fruta dulce y crujiente.',
    shadow: 'rgba(255, 0, 0, 0.5)',
    image: require('./assets/images/apple.png'),
    color: opacity => `rgba(255, 0, 0, ${opacity})`,
  },
  {
    name: 'Banana',
    price: '0.50',
    star: 4.7,
    desc: 'Una fruta suave y dulce.',
    shadow: 'rgba(255, 255, 0, 0.5)',
    image: require('./assets/images/banana.png'),
    color: opacity => `rgba(255, 255, 0, ${opacity})`,
  },
  // Agrega más frutas según sea necesario
];
