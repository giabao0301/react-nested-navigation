// Trịnh Gia Bảo - 21521866
import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import FontAwsome from 'react-native-vector-icons/FontAwesome';

const ProductDetailsScreen = props => {
  const {...productDetails} = props.route.params.data;
  React.useLayoutEffect(() => {
    if (!props.navigation || !props.route) return;
    const drawerNavigator = props.navigation.getParent('Home');

    if (drawerNavigator) {
      if (props.route.name === 'HomeDetails') {
        drawerNavigator.setOptions({
          headerShown: false,
        });
      }
    }

    return drawerNavigator
      ? () => {
          drawerNavigator.setOptions({
            headerShown: true,
          });
        }
      : undefined;
  }, [props.navigation, props.route]);
  return (
    <View style={styles.body}>
      <Image style={styles.image} source={{uri: productDetails.productImage}} />
      <ScrollView>
        <Text style={styles.textBold}>{productDetails.productName}</Text>
        <Text style={styles.text}>{productDetails.productDescription}</Text>
        <Text style={styles.textBold}>
          Price: ${productDetails.productPrice}
        </Text>
        <View style={styles.rating}>
          <Text style={styles.textBold}>
            Rating: {productDetails.productRating}
          </Text>
          <FontAwsome name="star" size={20} color="#FFD700" />
          <Text style={styles.textBold}>
            ({productDetails.productRatingCount} reviews)
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetailsScreen;
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'space-between',
    margin: 10,
    marginTop: 0,
  },
  image: {
    width: '100%',
    height: '50%',
  },
  text: {
    color: '#000',
  },
  textBold: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
