export const categoriesFruits: string[] = [
  'Naranjas',
  'Bananas',
  'Piñas',
  'Manzanas',
  'Cerezas',
];

export const categoriesVegetables: string[] = [
  'Zanahoria',
  'Brócoli',
  'Espinaca',
  'Tomate',
];

interface FeaturedItem {
  name: string;
  price: string;
  star: number;
  desc: string;
  shadow: string;
  // image: any;
  color: (opacity: number) => string;
}

export const featuredFruits: FeaturedItem[] = [
  {
    name: 'Manzana',
    price: '1.50',
    star: 4.5,
    desc: 'Una fruta dulce y crujiente.',
    shadow: 'rgba(255, 0, 0, 0.5)',
    // image: require('./assets/images/apple.png'),
    color: opacity => `rgba(255, 0, 0, ${opacity})`,
  },
  {
    name: 'Banana',
    price: '0.50',
    star: 4.7,
    desc: 'Una fruta suave y dulce.',
    shadow: 'rgba(255, 255, 0, 0.5)',
    // image: require('./assets/images/banana.png'),
    color: opacity => `rgba(255, 255, 0, ${opacity})`,
  },
  {
    name: 'Piña',
    price: '2.00',
    star: 4.8,
    desc: 'Una fruta tropical y jugosa.',
    shadow: 'rgba(255, 223, 0, 0.5)',
    // image: require('./assets/images/pineapple.png'),
    color: opacity => `rgba(255, 223, 0, ${opacity})`,
  },
  {
    name: 'Cereza',
    price: '3.00',
    star: 4.9,
    desc: 'Una fruta pequeña y dulce.',
    shadow: 'rgba(220, 20, 60, 0.5)',
    // image: require('./assets/images/cherry.png'),
    color: opacity => `rgba(220, 20, 60, ${opacity})`,
  },
  {
    name: 'Naranja',
    price: '1.20',
    star: 4.6,
    desc: 'Una fruta cítrica y refrescante.',
    shadow: 'rgba(255, 165, 0, 0.5)',
    // image: require('./assets/images/orange.png'),
    color: opacity => `rgba(255, 165, 0, ${opacity})`,
  },
];

export const featuredVegetables: FeaturedItem[] = [
  {
    name: 'Zanahoria',
    price: '0.80',
    star: 4.3,
    desc: 'Una verdura crujiente y dulce.',
    shadow: 'rgba(255, 165, 0, 0.5)',
    // image: require('./assets/images/carrot.png'),
    color: opacity => `rgba(255, 165, 0, ${opacity})`,
  },
  {
    name: 'Brócoli',
    price: '1.20',
    star: 4.6,
    desc: 'Una verdura verde y saludable.',
    shadow: 'rgba(0, 128, 0, 0.5)',
    // image: require('./assets/images/broccoli.png'),
    color: opacity => `rgba(0, 128, 0, ${opacity})`,
  },
  {
    name: 'Espinaca',
    price: '1.00',
    star: 4.4,
    desc: 'Una verdura verde y nutritiva.',
    shadow: 'rgba(34, 139, 34, 0.5)',
    // image: require('./assets/images/spinach.png'),
    color: opacity => `rgba(34, 139, 34, ${opacity})`,
  },
  {
    name: 'Tomate',
    price: '0.90',
    star: 4.5,
    desc: 'Una verdura jugosa y versátil.',
    shadow: 'rgba(255, 99, 71, 0.5)',
    // image: require('./assets/images/tomato.png'),
    color: opacity => `rgba(255, 99, 71, ${opacity})`,
  },
];
