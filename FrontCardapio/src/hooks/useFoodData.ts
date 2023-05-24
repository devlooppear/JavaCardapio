import { useQuery, useMutation } from 'react-query'
import axios from 'axios'
import { FoodData } from '../interface/FoodData'

const API_URL = 'http://localhost:8080'

export function useFoodData() {
  const { data, error, isLoading, refetch } = useQuery<FoodData[], Error>('food-data', async () => {
    const response = await axios.get(`${API_URL}/food`)
    return response.data
  })

  const updateFoodData = useMutation<void, unknown, { id: number; newData: FoodData }>(
    ({ id, newData }) => axios.put(`${API_URL}/food/${id}`, newData),
    {
      onSuccess: () => {
        refetch() // Refresh the data after updating
      }
    }
  )

  return { data, error, isLoading, updateFoodData }
}