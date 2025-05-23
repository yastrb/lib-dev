import { AxiosRequestConfig } from 'axios'

import BaseRESTClient from 'api/BaseRESTClient'
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types'
import { TCredentials } from 'api/RESTClient/types/TUsers'
import { TJWT } from 'api/types'

/**
 * Виконує аутентифікацію користувача та отримує JWT-токени.
 *
 * @function login
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TCredentials} payload - Облікові дані користувача (email & password).
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<TJWT>>} - Об'єкт із токенами доступу та оновлення.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.auth.login({ email: 'test@example.com', password: '123456' });
 *   console.log('Успішний вхід:', data);
 * } catch (error) {
 *   console.error('Помилка входу:', error);
 * }
 */

// Update the JWT type to match server response


export interface TAPILogin {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TJWT>;
  TPayload: TCredentials;
}

export type TError = TAPILogin['TError'];
export type TSuccess = TAPILogin['TSuccess'];
export type TPayload = TAPILogin['TPayload'];

export async function login(
  this: BaseRESTClient,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.post('/auth/login', payload, {
      ...config,
      signal,
    });

    // Debug the response
    console.log('Login response:', response);

    // Check if response has token
    if (!response.data || !response.data.token) {
      throw new Error('Invalid response structure');
    }

    // Store token in headers
    this.setHeader('Authorization', `Bearer ${response.data.token}`);

    return {
      data: {
        token: response.data.token
      },
      message: 'Success',
      status: response.status === 200 ? 'OK' : 'Error'
    };
  } catch (error: any) {
    console.error('Login error:', error);
    throw {
      message: error.message || 'Login failed',
      status: 'Error',
      errors: error.response?.data || {}
    };
  }
}