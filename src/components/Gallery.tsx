import React, {FC} from 'react';

import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

import {IGalleryProps, SCREENS} from '../models/NavigationModel';

const GalleryItem: FC<{
  item: IGalleryProps['data'][0];
  navigation: IGalleryProps['navigation'];
}> = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(SCREENS.Stories, {itemId: item.id})}>
      <View style={styles.photoFrame}>
        <View style={styles.itemContainer}>
          <Image source={{uri: item.image}} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Gallery: FC<IGalleryProps> = ({data, navigation}) => {
  return (
    <FlatList
      data={data}
      numColumns={3}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <GalleryItem item={item} navigation={navigation} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  photoFrame: {
    width: 115,
    height: 150,
    margin: 3,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  image: {
    width: 100,
    height: 120,
    borderRadius: 8,
  },
  title: {
    marginTop: 5,
  },
});

export default Gallery;
