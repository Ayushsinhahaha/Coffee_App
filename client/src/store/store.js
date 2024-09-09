import {create} from 'zustand';
import {produce} from 'immer';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CoffeeData from '../data/CoffeeData';

export const useStore = create(
  persist(
    (set, get) => ({
      CoffeeList: CoffeeData,
      CartPrice: 0,
      CartList: [],
      OrderHistoryList: [],
    }),
    {
      name: 'Coffee-App',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
