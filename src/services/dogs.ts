import { DogType } from 'server/mirage';
import apiClient from './apiClient';

export async function addNewDogInfo(dogInfo: DogType) {
  const res = await apiClient.post<unknown>('dogs', dogInfo);
  return res.data;
}

export async function fetchAllDogs() {
  const res = await apiClient.get<{ dogs: DogType[] }>('dogs');
  return res.data;
}

export async function deleteDogInfo(id: string) {
  return apiClient.delete<unknown>(`dogs/${id}`);
}
