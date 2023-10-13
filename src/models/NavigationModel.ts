import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase, RouteProp} from '@react-navigation/native';

export enum SCREENS {
  MainScreen = 'MainScreen',
  Stories = 'Stories',
}

export interface IScreenProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase>;
}

export interface IGalleryProps {
  data: {id: number; image: string; title: string}[];
  navigation: NativeStackNavigationProp<ParamListBase>;
}

export interface IStoryProps {
  by: string;
  descendants: number;
  id: number;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}
