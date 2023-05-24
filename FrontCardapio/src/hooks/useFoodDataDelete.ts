import { useMutation } from 'react-query';
import axios, { AxiosResponse } from 'axios';

const API_URL = 'http://localhost:8080';

export function useFoodDataDelete() {
  const deleteFoodData = useMutation<void, unknown, number>(deleteFood);

  async function deleteFood(id: number): Promise<void> {
    await axios.delete<void, AxiosResponse<void>>(`${API_URL}/food/${id}`);
  }

  return deleteFoodData;
}
