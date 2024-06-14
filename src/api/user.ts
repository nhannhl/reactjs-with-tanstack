import axiosClient from "./axiosClient";
import { UserProfile } from '@/models';

export const UserApi = {
  getUsers: (): Promise<UserProfile[]> => {
    console.log("yyy")
    const url = '/users';
    return axiosClient.get(url);
  },
  getUser: (id: number): Promise<UserProfile> => {
    console.log("xxx")
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },
  getUserByEmail: (params: { email: string, username: string }): Promise<UserProfile[] | undefined> => {
    const url = `/users`;
    return axiosClient.get(url, { params });
  },
  createUser: (data: { email: string }): Promise<Pick<UserProfile, 'id' | 'email'>> => {
    const url = `/users`;
    return axiosClient.post(url, data);
  },
  checkUserByEmail: (email: string): Promise<UserProfile[] | undefined> => {
    const url = `/users`;
    return axiosClient.get(url, { params: { email } });
  }
}