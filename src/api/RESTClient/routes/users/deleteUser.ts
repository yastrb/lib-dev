import { AxiosRequestConfig } from 'axios'

import BaseRESTClient from '../../../BaseRESTClient'
import { TResponseError, TResponseSuccess } from '../../../RESTClient/types'

/**
 * Видаляє користувача за його ідентифікатором.
 *
 * @function deleteUser 
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {number} user_id - Унікальний ідентифікатор користувача.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<void>>} - Повідомлення про успішне видалення.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   await client.api.users.delete({ user_id: 1 });
 *   console.log('User deleted successfully');
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIDeleteUser {
  TError: TResponseError;
  TSuccess: TResponseSuccess<void>;
  TParams: {
    user_id: number;
  };
}

export type TError = TAPIDeleteUser['TError'];
export type TSuccess = TAPIDeleteUser['TSuccess'];
export type TParams = TAPIDeleteUser['TParams'];

export async function deleteUser(
  this: BaseRESTClient,
  { user_id }: TParams,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.delete(`/users/${user_id}/`, {
      ...config,
      signal,
    });
    return {
      message: response.statusText,
      status: 'OK',
      data: undefined,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}