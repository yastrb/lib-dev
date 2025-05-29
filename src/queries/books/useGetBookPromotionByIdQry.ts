import {
  DefinedInitialDataOptions,
  UndefinedInitialDataOptions,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query'

import client from '../../api/index'
import {
  TError,
  TParams,
  TSuccess,
} from '../../api/RESTClient/routes/books/getBookPromotionById'

export type TGetBookByIdQry = UseQueryResult<TSuccess, TError>;

export type TGetBookByIdOpts = Omit<
  DefinedInitialDataOptions<TSuccess, TError>,
  'queryKey' | 'initialData'
>;

/**
 * Генерує унікальний ключ запиту для getBookById.
 *
 * @param {TParams} params - Вхідні параметри для запиту.
 * @returns {Array<string | TParams>} - Унікальний ключ запиту.
 */
export const getGetBookByIdKey = (
  params: TParams
): Array<string | TParams> => ['books', 'getBookById', params];

/**
 * Формує параметри для виклику `useQuery` при виконанні запиту getBookById.
 *
 * @param {TParams} params - Вхідні параметри для запиту.
 * @param {TGetBookByIdOpts} [options] - Додаткові опції для запиту.
 * @returns {UndefinedInitialDataOptions<TSuccess, TError>} - Опції запиту.
 */
export function getGetBookByIdOpts(
  params: TParams,
  options?: TGetBookByIdOpts
): UndefinedInitialDataOptions<TSuccess, TError> {
  return {
    ...options,
    queryKey: getGetBookByIdKey(params),
    queryFn: ({ signal }) => client.api.books.getById(params, { signal }),
    enabled: Boolean(options?.enabled ?? params.book_id),
  };
}

/**
 * Хук для отримання даних getBookById.
 *
 * @param {TParams} params - Вхідні параметри для запиту.
 * @param {TGetBookByIdOpts} [options] - Додаткові опції для запиту.
 * @returns {TGetBookByIdQry} - Результат запиту.
 *
 * @example
 * const { data, isLoading, isError } = useGetBookByIdQry(
 *   { id: 1 },
 *   { enabled: true, staleTime: 5000 }
 * );
 */
export default function useGetBookByIdQry(
  params: TParams,
  options?: TGetBookByIdOpts
): TGetBookByIdQry {
  const opts = getGetBookByIdOpts(params, options);
  return useQuery<TSuccess, TError>(opts);
}
