import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import ProductList from '../components/Home/ProductList';

const CategoriesScreen = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCategories = useCallback(async () => {
    try {
      const response = await fetch(
        'https://fakestoreapi.com/products/categories',
      );
      if (!response.ok) throw new Error('Something went wrong!');

      const data = await response.json();
      setCategories(data);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  let categoriesList = <Text>No categories found!</Text>;
  if (categories.length > 0) {
    categoriesList = (
      <View style={styles.categories}>
        <View style={styles.category}>
          <Image
            source={require('../assets/icons/category.png')}
            style={styles.icon}
          />
          <Text style={styles.text}>All</Text>
        </View>
        <ScrollView horizontal={true}>
          {categories.map((item, index) => {
            return (
              <Pressable key={index}>
                <Text style={styles.text}>{item}</Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    );
  }

  if (error) {
    categoriesList = <Text>{error}</Text>;
  }

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
    fetchCategories();
    fetchProducts();
  }, [fetchProducts]);

  let content = <Text>No products found!</Text>;
  if (products.length > 0) {
    content = <ProductList products={products} navigation={navigation} />;
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

  return (
    <View style={styles.body}>
      {categoriesList}
      {content}
    </View>
  );
};
export default CategoriesScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  categories: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  category: {
    alignItems: 'center',
  },
  text: {
    color: '#000',
    marginHorizontal: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
});
