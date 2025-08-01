import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.8;

const CarouselCardItem = ({ item }) => {
  //console.log('CarouselCardItem item:', item);
  //console.log("Image Carousel: ",  item.image);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Image
          source={typeof item.image === 'string' ? { uri: item.image } : item.image}
          style={styles.image}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  contentContainer: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#7f8c8d',
    lineHeight: 20,
  },
});

export default CarouselCardItem; 