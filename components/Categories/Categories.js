import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
const Categories = props => {
  return (
    <View style={styles.categories}>
      <ScrollView horizontal={true}>
        <Pressable
          style={styles.category}
          onPress={() => {
            props.onSelectedCategory('all');
          }}>
          <Image
            source={require('../../assets/icons/shapes.png')}
            style={[styles.icon, {marginHorizontal: 10}]}
          />
          <Text style={styles.text}>All</Text>
        </Pressable>
        {props.categories.map((item, index) => {
          let icon;
          if (item === 'electronics') {
            icon = require('../../assets/icons/gadgets.png');
          } else if (item === 'jewelery') {
            icon = require('../../assets/icons/engagement-ring.png');
          } else if (item === "men's clothing") {
            icon = require('../../assets/icons/man.png');
          } else if (item === "women's clothing") {
            icon = require('../../assets/icons/woman.png');
          }
          return (
            <Pressable
              key={index}
              style={styles.category}
              onPress={() => {
                props.onSelectedCategory(item);
              }}>
              <Image source={icon} style={styles.icon} />
              <Text style={styles.text}>{item}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
const styles = StyleSheet.create({
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
    marginBottom: 10,
  },
});
