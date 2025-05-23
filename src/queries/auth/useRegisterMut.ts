import {
  MutationOptions,
  useMutation,
  UseMutationResult,
} from '@tanstack/react-query'

import client from 'api/index'
import { TError, TPayload, TSuccess } from 'api/RESTClient/routes/auth/register'

export type TRegisterMut = UseMutationResult<TSuccess, TError, TPayload>;

export type TRegisterMutOpt = Omit<
  MutationOptions<TSuccess, TError, TPayload>,
  'mutationKey'
>;

/**
 * Генерує унікальний ключ мутації для register.
 *
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @returns {Array<string | TPayload>} - Унікальний ключ мутації.
 */
export const getRegisterMutKey = (payload: TPayload): Array<string | TPayload> => [
  'auth',
  'register',
  payload.email,
];

/**
 * Формує параметри для виклику `useMutation` при виконанні запиту register.
 *
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @param {TRegisterMutOpt} [options] - Додаткові опції для мутації.
 * @returns {MutationOptions<TSuccess, TError, TPayload>} - Опції мутації.
 */
export function getRegisterMutOpts(
  payload: TPayload,
  options?: TRegisterMutOpt
): MutationOptions<TSuccess, TError, TPayload> {
  return {
    ...options,
    mutationKey: getRegisterMutKey(payload),
    mutationFn: (variables: TPayload) => client.api.auth.register(variables),
  };
}

/**
 * Хук для виклику мутації register.
 *
 * @param {TPayload} payload - Вхідні параметри для мутації.
 * @param {TRegisterMutOpt} [options] - Додаткові опції для мутації.
 * @returns {TRegisterMut} - Результат мутації.
 *
 * @example
 * const { mutate, isPending, isError } = useRegisterMut(
 *   { 
 *     email: 'user@example.com', 
 *     password: 'password123',
 *     name: 'John Doe',
 *   },
 *   {
 *     onSuccess: (data) => console.log('Registration success:', data),
 *     onError: (error) => console.error('Registration error:', error),
 *   }
 * );
 *
 * // Виклик мутації
 * mutate({ 
 *   email: 'user@example.com', 
 *   password: 'password123',
 *   name: 'John Doe',
 * });
 */
export default function useRegisterMut(
  payload: TPayload,
  options?: TRegisterMutOpt
): TRegisterMut {
  const opts = getRegisterMutOpts(payload, options);
  return useMutation<TSuccess, TError, TPayload>(opts);
}