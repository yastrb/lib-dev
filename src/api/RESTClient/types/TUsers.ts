import { TUser } from '../../../types/TUser'

// 📌 Список користувачів (з пагінацією)
export interface TListUsers {
  count: number;
  next: string | null;
  previous: string | null;
  page: number;
  pageSize: number;
  results: TUser[];
}

// 📌 Дані для реєстрації та входу
export interface TCredentials {
  email: string;
  password: string;
  confirm_password?: string;
}
