import { useQuery, UseQueryOptions, queryOptions } from "@tanstack/react-query";
import { UserApi } from "@/api";
import { UserProfile } from "@/models";
import { QUERY_KEY } from "@/constant";

export const useFetchUsers = (
  options?: Omit<UseQueryOptions<UserProfile[]>, "queryKey" | "queryFn">
) => {
  return useQuery({
    ...options,
    queryKey: [QUERY_KEY.User.List],
    queryFn: UserApi.getUsers,
  })
};

export const useFetchUserById = (
  id: number,
  options?: Omit<UseQueryOptions<UserProfile>, "queryKey" | "queryFn">
) => {
  return useQuery({
    ...options,
    queryKey: [QUERY_KEY.User.Detail, id],
    queryFn: () => UserApi.getUser(id),
    enabled: !!id,
  })
};

export const useLogin = (
  params: { email: string, username: string },
  options?: Omit<UseQueryOptions<UserProfile[] | undefined>, "queryKey" | "queryFn">
) => {
  return useQuery({
    ...options,
    queryKey: [QUERY_KEY.User.Email, params],
    queryFn: () => UserApi.getUserByEmail(params),
    enabled: !!params.email && !!params.username,
  })
}

export const useCheckEmailExist = (
  email: string,
  options?: Omit<UseQueryOptions<UserProfile[] | undefined>, "queryKey" | "queryFn">
) => {
  return useQuery({
    ...options,
    queryKey: [QUERY_KEY.User.Email, email],
    queryFn: () => UserApi.checkUserByEmail(email),
    enabled: !!email,
  })
}

export const fetchUserByIdOptions = (id: number) => queryOptions({
  queryKey: [QUERY_KEY.User.Detail, id],
  queryFn: () => UserApi.getUser(id),
})