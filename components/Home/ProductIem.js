import React from 'react';
import {Image, Text, View, StyleSheet, Pressable, Alert} from 'react-native';
import FontAwsome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProductItem = props => {
  return (
    <Pressable
      onPress={() => {
        props.navigation.navigate('HomeDetails', {data: props});
      }}
      style={styles.body}>
      <Image style={styles.image} source={{uri: props.productImage}} />
      <Text style={styles.text}>{props.productName}</Text>
      <View style={styles.details}>
        <View>
          <Text style={styles.price}>${props.productPrice}</Text>
          <View style={styles.rating}>
            <Text style={styles.text}>{props.productRating}</Text>
            <FontAwsome name="star" size={20} color="#FFD700" />
            <Text style={styles.text}>({props.productRatingCount})</Text>
          </View>
        </View>
        <Ionicons
          name="add-circle"
          size={40}
          color="#08346B"
          style={styles.addIcon}
          onPress={() => {
            Alert.alert('Message', 'Added to cart');
          }}
        />
      </View>
    </Pressable>
  );
};

export default ProductItem;
const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: 200,
    backgroundColor: '#fff',
    margin: 10,
    justifyContent: 'space-between',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    maxHeight: 45,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#8F4C5D',
  },
  image: {
    height: 200,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addIcon: {
    textAlign: 'right',
  },
});
