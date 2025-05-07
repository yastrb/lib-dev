import {
	MutationOptions,
	UseMutationResult,
	useMutation,
	useQueryClient,
} from '@tanstack/react-query'

import client from '../../api/index'
import {
	TError,
	TParams,
	TSuccess,
} from '../../api/RESTClient/routes/users/deleteUser'
import { getGetAllUsersKey } from './useGetAllUsersQry'
import { getGetUserByIdKey } from './useGetUserByIdQry'

export type TDeleteUserQry = UseMutationResult<TSuccess, TError, TParams>;

export type TDeleteUserOpts = Omit<
  MutationOptions<TSuccess, TError, TParams>,
  'mutationFn'
>;

/**
 * Хук для видалення користувача.
 *
 * @param {TDeleteUserOpts} [options] - Додаткові опції для мутації.
 * @returns {TDeleteUserQry} - Результат мутації.
 *
 * @example
 * const { mutate, isLoading, isError } = useDeleteUserQry();
 * 
 * // Використання
 * const handleDelete = () => {
 *   mutate({ user_id: 1 });
 * };
 */
export default function useDeleteUserQry(options?: TDeleteUserOpts): TDeleteUserQry {
  const queryClient = useQueryClient();

  return useMutation<TSuccess, TError, TParams>({
    ...options,
    mutationFn: (params) => client.api.users.delete(params),
    onSuccess: (data, variables, context) => {
      // Інвалідуємо запити після успішного видалення
			queryClient.invalidateQueries({ queryKey: getGetAllUsersKey() });
      queryClient.invalidateQueries({ queryKey: getGetUserByIdKey(variables) });
      
      options?.onSuccess?.(data, variables, context);
    },
  });
}