import { useQuery } from 'react-query';
import axios from 'axios';
import { FoodData } from '../interface/FoodData';

const API_URL = 'http://localhost:8080';

export function useFoodDataEdit(): {
  data: FoodData[] | undefined;
  error: Error | null;
  isLoading: boolean;
  updateFoodData: (id: number, newData: FoodData) => Promise<void>;
} {
  const { data, error, isLoading, refetch } = useQuery<FoodData[], Error>('food-data', async () => {
    const response = await axios.get(`${API_URL}/food`);
    return response.data;
  });

  const updateFoodData = async (id: number, newData: FoodData): Promise<void> => {
    await axios.put(`${API_URL}/food/${id}`, newData);
    refetch(); // Refresh the data after updating
  };

  return { data, error, isLoading, updateFoodData };
}
