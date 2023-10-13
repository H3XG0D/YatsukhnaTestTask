import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {getStoryInfo} from '../api';
import {useRoute} from '@react-navigation/native';
import LoadingIndicator from '../components/LoadingIndicator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {IStoryProps} from '../models/NavigationModel';

const Story = () => {
  const route = useRoute();
  const {itemId} = route.params as {itemId: string};

  const [info, setinfo] = useState<IStoryProps>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const insets = useSafeAreaInsets();

  async function fetchStoryInfo() {
    try {
      setIsLoading(true);
      const storyInfo: any = await getStoryInfo(itemId);
      setinfo(storyInfo);
      setIsLoading(false);
    } catch (error) {
      console.error('Ошибка при получении ID', error);
    }
  }

  useEffect(() => {
    fetchStoryInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 10 + insets.top,
      paddingHorizontal: 15,
    },
    info: {
      paddingTop: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    subtitle: {
      color: '#7A7A7A',
    },
    row: {
      flexDirection: 'row',
      gap: 50,
    },
    buttonStyle: {
      backgroundColor: '#F60',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      borderRadius: 40,
    },
  });

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <View>
          <View style={styles.info}>
            <Text style={styles.subtitle}>Title</Text>
            <Text style={styles.title}>{info?.title}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.subtitle}>By</Text>
            <Text style={styles.title}>{info?.by}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.subtitle}>Time</Text>
            <Text style={styles.title}>{info?.time}</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.info}>
              <Text style={styles.subtitle}>Score</Text>
              <Text style={styles.title}>{info?.score}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.subtitle}>Descendants</Text>
              <Text style={styles.title}>{info?.descendants}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.subtitle}>Type</Text>
              <Text style={styles.title}>{info?.type}</Text>
            </View>
          </View>
        </View>
      )}
      <TouchableOpacity
        style={{
          ...styles.buttonStyle,
          position: 'absolute',
          bottom: 30,
          left: 0,
          right: 0,
          marginHorizontal: 30,
        }}>
        <Text style={{color: 'white'}}>Open</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Story;
