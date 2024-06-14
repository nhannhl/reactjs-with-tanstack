import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserApi } from "@/api";
import { QUERY_KEY } from "@/constant";

export const useAddUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey : [QUERY_KEY.User.Create],
    mutationFn: (data: { email: string }) => UserApi.createUser(data),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [QUERY_KEY.User.List] });
    }
  })
}