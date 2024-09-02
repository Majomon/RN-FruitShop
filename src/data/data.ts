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

export interface FeaturedItem {
  name: string;
  price: string;
  star: number;
  desc: string;
  shadow: string;
  image: any;
  // color: (opacity: number) => string;
  subtleColor: string;
}

export interface CartItems {
  name: string;
  price: string;
  qty: number;
  desc: string;
  shadow: string;
  image: any;
}

export const featuredFruits: FeaturedItem[] = [
  {
    name: 'Manzana',
    price: '1.50',
    star: 4.5,
    desc: 'Una fruta dulce y crujiente.',
    shadow: '#ff2d2d',
    image: require('../assets/fruits/manzana.png'),
    // color: opacity => `rgba(255, 0, 0, ${opacity})`,
    subtleColor: '#ff9999',
  },
  {
    name: 'Banana',
    price: '0.50',
    star: 4,
    desc: 'Una fruta suave y dulce.',
    shadow: '#fff700',
    image: require('../assets/fruits/banana.png'),
    // color: opacity => `rgba(255, 255, 0, ${opacity})`,
    subtleColor: '#f2ff41',
  },
  {
    name: 'Piña',
    price: '2.00',
    star: 5,
    desc: 'Una fruta tropical y jugosa.',
    shadow: '#e6df0a',
    image: require('../assets/fruits/piña.png'),
    // color: opacity => `rgba(255, 223, 0, ${opacity})`,
    subtleColor: '#f1fb49',
  },
  {
    name: 'Cereza',
    price: '3.00',
    star: 1.5,
    desc: 'Una fruta pequeña y dulce.',
    shadow: '#e94a4a',
    image: require('../assets/fruits/cereza.png'),
    // color: opacity => `rgba(220, 20, 60, ${opacity})`,
    subtleColor: '#f9a8a8',
  },
  {
    name: 'Naranja',
    price: '1.20',
    star: 3,
    desc: 'Una fruta cítrica y refrescante.',
    shadow: '#f87717',
    image: require('../assets/fruits/naranja.png'),
    // color: opacity => `rgba(255, 165, 0, ${opacity})`,
    subtleColor: '#fcbc75',
  },
];

export const cartItem: CartItems[] = [
  {
    name: 'Manzana',
    price: '1.50',
    qty: 10,
    desc: 'Una fruta dulce y crujiente.',
    shadow: '#ff9999',
    image: require('../assets/fruits/manzana.png'),
  },
  {
    name: 'Banana',
    price: '0.50',
    qty: 20,
    desc: 'Una fruta suave y dulce.',
    shadow: '#f2ff41',
    image: require('../assets/fruits/banana.png'),
  },
  {
    name: 'Piña',
    price: '2.00',
    qty: 5,
    desc: 'Una fruta tropical y jugosa.',
    shadow: '#f1fb49',
    image: require('../assets/fruits/piña.png'),
  },
  {
    name: 'Cereza',
    price: '3.00',
    qty: 15,
    desc: 'Una fruta pequeña y dulce.',
    shadow: '#f9a8a8',
    image: require('../assets/fruits/cereza.png'),
  },
  {
    name: 'Naranja',
    price: '1.20',
    qty: 12,
    desc: 'Una fruta cítrica y refrescante.',
    shadow: '#fcbc75',
    image: require('../assets/fruits/naranja.png'),
  },
];

/* export const featuredVegetables: FeaturedItem[] = [
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
]; */
