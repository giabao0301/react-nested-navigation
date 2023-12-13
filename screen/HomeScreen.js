import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import Banner from '../components/Home/Banner';
import ProductList from '../components/Home/ProductList';

const HomeScreen = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://fakestoreapi.com/products');

      if (!response.ok) throw new Error('Something went wrong!');

      const data = await response.json();
      let loadedProducts = [];
      for (const key in data) {
        loadedProducts.push({
          id: data[key].id,
          title: data[key].title,
          price: data[key].price,
          image: data[key].image,
          rating: data[key].rating,
          description: data[key].description,
        });
      }
      setProducts(loadedProducts);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  let content = <Text>No products found!</Text>;
  if (products.length > 0) {
    const hotDeals = products.filter(item => item.price < 100);
    const newArrivals = products.filter(item => item.price >= 100);
    content = (
      <ScrollView style={styles.body}>
        <Text style={styles.text}>Shop for quality, Shop for style</Text>
        <Banner />
        <Text style={styles.text}>Hot Deals</Text>
        <ProductList products={hotDeals} navigation={navigation} />
        <Text style={styles.text}>New Arrivals</Text>
        <ProductList products={newArrivals} navigation={navigation} />
      </ScrollView>
    );
  }
  if (isLoading) {
    content = (
      <ActivityIndicator
        size="large"
        color="#CA2B22"
        style={{justifyContent: 'center', alignItems: 'center', flex: 1}}
      />
    );
  }
  if (error) {
    content = <Text>{error}</Text>;
  }

  return <View style={styles.body}>{content}</View>;
};

export default HomeScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#AF0D3F',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  text: {
    color: '#CA2B22',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
});
