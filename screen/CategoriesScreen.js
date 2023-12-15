import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import ProductList from '../components/Home/ProductList';
import Categories from '../components/Categories/Categories';

const CategoriesScreen = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const selectedCategoryHandler = category => {
    setSelectedCategory(category);
  };
  console.log(selectedCategory);
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

  let categoriesList = <Text style={{color: 'red'}}>No categories found!</Text>;

  if (categories.length > 0) {
    categoriesList = (
      <Categories
        categories={categories}
        onSelectedCategory={selectedCategoryHandler}
      />
    );
  }

  if (isLoading) {
    categoriesList = '';
  }

  if (error) {
    categoriesList = <Text style={{color: 'red'}}>{error}</Text>;
  }

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

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
          category: data[key].category,
        });
      }
      if (selectedCategory !== 'all') {
        loadedProducts = loadedProducts.filter(
          item => item.category === selectedCategory,
        );
      }
      setProducts(loadedProducts);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [selectedCategory]);

  useEffect(() => {
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
    content = <Text style={{color: 'red'}}>{error}</Text>;
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
});
