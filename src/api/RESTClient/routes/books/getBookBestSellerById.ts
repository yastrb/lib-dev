import { AxiosRequestConfig } from 'axios'

import { TBook } from '../../../../types/TBook'
import BaseRESTClient from '../../../BaseRESTClient'
import { TResponseError, TResponseSuccess } from '../../types'

/**
 * Отримує дані Книги типу BestSeller за його ідентифікатором.
 *
 * @function getBookById
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {number} book_id - Унікальний ідентифікатор Книги.
 * @returns {Promise<TResponseSuccess<TBook>>} - Об'єкт успішної відповіді з даними Книги.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.books.getById({ book_id: 1 });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIGetBookById {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TBook>;
  TParams: {
    book_id: number;
  };
}

export type TError = TAPIGetBookById['TError'];
export type TSuccess = TAPIGetBookById['TSuccess'];
export type TParams = TAPIGetBookById['TParams'];

export async function getBookByIdBestSeller(
  this: BaseRESTClient,
  { book_id }: TParams,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.get<TSuccess>(`/books/bestseller/${book_id}/`, {
      ...config,
      signal,
    });
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TBook,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
