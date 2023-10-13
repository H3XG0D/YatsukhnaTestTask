import React, {FC, useEffect, useState} from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import LoadingIndicator from '../components/LoadingIndicator';
import {getList} from '../api';
import Gallery from '../components/Gallery';
import {IScreenProps} from '../models/NavigationModel';

const MainScreen: FC<IScreenProps> = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [storyId, setStoryId] = useState<number[] | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const allIds: any = await getList();
      setStoryId(allIds);
    } catch (error) {
      console.error('Ошибка при получении ID', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return <LoadingIndicator />;
    }
    const data = (storyId || []).map((id: number) => ({
      id,
      image: 'https://placekitten.com/200/300',
      title: 'Story',
    }));
    return <Gallery data={data} navigation={navigation} />;
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 10 + insets.top,
      paddingHorizontal: 15,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stories</Text>
      <View style={styles.content}>{renderContent()}</View>
    </View>
  );
};

export default MainScreen;
