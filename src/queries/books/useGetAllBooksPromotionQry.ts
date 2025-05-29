import {
  DefinedInitialDataOptions,
  UndefinedInitialDataOptions,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query'

import client from '../../api/index'
import { TError, TSuccess } from '../../api/RESTClient/routes/books/getAllBooksPromotion'
import { TListMeta } from '../../api/RESTClient/types'
import { TBook } from '../../types/TBook'

export type TGetAllBooksQry = UseQueryResult<TSuccess, TError>;

export type TGetAllBooksOpts = Omit<
  DefinedInitialDataOptions<TSuccess, TError>,
  'queryKey' | 'initialData'
>;

/**
 * Генерує унікальний ключ для запиту getAllBooks.
 *
 * @returns {Array<string>} - Унікальний ключ запиту.
 */
export const getGetAllBooksPromotionKey = (): Array<string> => [
  'books',
  'getAllBooksPromotion',
];

/**
 * Формує параметри для виклику `useQuery` при отриманні даних getAllBooks.
 *
 * @param {TListMeta<TBook>} [params] - Параметри для запиту.
 * @param {TGetAllBooksOpts} [options] - Додаткові опції для запиту.
 * @returns {UndefinedInitialDataOptions<TSuccess, TError>} - Опції запиту.
 */
export function getGetAllBooksOpts(
  params?: TListMeta<TBook>,
  options?: TGetAllBooksOpts
): UndefinedInitialDataOptions<TSuccess, TError> {
  return {
    ...options,
    queryKey: getGetAllBooksPromotionKey(),
    queryFn: ({ signal }) => client.api.books.getAllPromotion(params, { signal }),
  };
}

/**
 * Хук для отримання даних getAllBooks.
 *
 * @param {TListMeta<TBook>} [params] - Параметри для запиту.
 * @param {TGetAllBooksOpts} [options] - Додаткові опції для запиту.
 * @returns {TGetAllBooksQry} - Результат запиту.
 *
 * @example
 * const { data, isLoading, isError } = useGetAllBooksQry({
 *   page: 1,
 *   pageSize: 4,
 *   sorting: 'id:desc',
 *   filters: {
 *     id: {
 *       $eq: '1',
 *     },
 *   },
 * });
 */
export default function useGetAllBooksPromotionQry(
  params?: TListMeta<TBook>,
  options?: TGetAllBooksOpts
): TGetAllBooksQry {
  const opts = getGetAllBooksOpts(params, options);
  return useQuery<TSuccess, TError>(opts);
}
