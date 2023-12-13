import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
const Banner = () => {
  const width = Dimensions.get('window').width;
  const images = [
    require('../../assets/images/banner1.jpg'),
    require('../../assets/images/banner2.jpg'),
    require('../../assets/images/banner3.jpg'),
    require('../../assets/images/banner4.jpg'),
  ];
  return (
    <Carousel
      loop
      width={width}
      height={width / 2}
      autoPlay={true}
      data={images}
      scrollAnimationDuration={1000}
      renderItem={({index}) => (
        <View style={styles.carousel}>
          <Image
            source={images[index]}
            style={{width: '95%', height: '100%'}}
          />
        </View>
      )}
    />
  );
};

export default Banner;
const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
