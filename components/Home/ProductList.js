import React, {useCallback, useState} from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import ProductItem from './ProductIem';

const Product = props => {
  return (
    <SafeAreaView style={styles.body}>
      <FlatList
        data={props.products}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({item}) => (
          <ProductItem
            navigation={props.navigation}
            productName={item.title}
            productImage={item.image}
            productPrice={item.price}
            productRating={item.rating.rate}
            productRatingCount={item.rating.count}
            productDescription={item.description}
          />
        )}
      />
    </SafeAreaView>
  );
};
export default Product;
const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});
