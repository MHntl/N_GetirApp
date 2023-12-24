import {Image, StyleSheet, Dimensions, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {FlatList} from 'react-native';
import {ColorsApp} from '../../constants';
const {height, width} = Dimensions.get('window');

const ImageCarousel = ({images}: {images: string[]}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  //@ts-ignore
  const onViewRef = useRef(viewableItems => {
    if (viewableItems.viewableItems.length > 0) {
      setActiveIndex(viewableItems.viewableItems[0].index || 0);
    }
  });
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  return (
    <View
      style={{
        height: height * 0.25,
        paddingTop: 25,
        alignItems: 'center',
        width: '100%',
        backgroundColor: ColorsApp.white,
      }}>
      <FlatList
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
        style={{width: width * 0.5, height: height * 0.2}}
        data={images}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width * 0.5}
        snapToAlignment="center"
        decelerationRate={'fast'}
        renderItem={item => (
          <Image
            style={{
              width: width * 0.5,
              height: height * 0.21,
              resizeMode: 'stretch',
            }}
            source={{uri: item.item}}
          />
        )}></FlatList>
      <View style={styles.dots}>
        {images.map((image, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor:
                  index === activeIndex ? ColorsApp.purple : '#F2F0FD',
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  dots: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 15,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 20,
    marginVertical: 2,
    marginHorizontal: 5,
  },
});
