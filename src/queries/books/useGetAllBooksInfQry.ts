import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query'

import client from '../../api/index'
import { TListMeta } from '../../api/RESTClient/types'
import { TListBooks } from '../../api/RESTClient/types/TBook'

import { TBook } from '../../types/TBook'
interface UseInfiniteBooksProps {
  params?: TListMeta<TBook>;
}

/**
 * Хук для отримання даних про книги з підтримкою пагінації.
 * Використовує react-query для асинхронних запитів та кешування.
 *
 * @param {UseInfiniteBooksProps} params - Параметри запиту, включаючи пагінацію, сортування та фільтри.
 *
 * @example
 * // Використання хука в компоненті:
 *
 * function List() {
 *   const [page, setPage] = useState<number>(1);
 *   const { data, isLoading, isError, error, totalCount, refetch } = useInfiniteBooks({
 *   params: { pageSize: 12, sorting: 'id:asc', page },
 * });
 *
 *  useEffect(() => {
 *    refetch(); // Викликаємо `refetch()` при зміні `page`
 * }, [page, refetch]);
 *
 *  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
 *   event.preventDefault();
 *   setPage(value);
 *  };
 *
 *   if (isLoading) return <p>Loading...</p>;
 *   if (isError) return <p>Error: {error?.message}</p>;
 *
 *   return (
 *     <Stack spacing={2}>
 *       <h3>Сторінка: {page}</h3>
 *       <ul>
 *         {data?.pages.map((page) =>
 *           page.results.map((i) => <li key={i.id}>{i.title}</li>)
 *         )}
 *       </ul>
 *       <Pagination
 *         count={totalCount} // Загальна кількість сторінок
 *         page={page} // Поточна сторінка
 *         onChange={handleChange} // Обробник зміни сторінки
 *       />
 *     </Stack>
 *   );
 * }
 */
export default function useInfiniteBooks({ params }: UseInfiniteBooksProps) {
  /**
   * Використовує хук useInfiniteQuery для управління запитом даних про книги з пагінацією.
   * Автоматично кешує та оновлює дані, а також надає зручні функції для управління пагінацією.
   */
  const {
    data,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    isLoading,
    isError,
    error,
    refetch,
  } = useInfiniteQuery<TListBooks, Error>({
    queryKey: ['books', 'getAllBooksInf', params?.page],
    /**
     * Функція для отримання даних про книги з API.
     * Використовує параметри пагінації для отримання конкретної сторінки даних.
     *
     * @param {QueryFunctionContext} context - Контекст запиту react-query, що містить інформацію про поточну сторінку.
     * @returns {Promise<TListBooks>} Проміс з даними про книги для поточної сторінки.
     */
    queryFn: async ({
      pageParam = params?.page || 1,
    }: QueryFunctionContext): Promise<TListBooks> => {
      const response = await client.api.books.getAll({
        ...params,
        page: pageParam as number,
      });
      return response.data;
    },
    initialPageParam: params?.page || 1,
    getNextPageParam: (lastPage) => {
      console.log(lastPage);
      if (lastPage?.next) {
        const urlParams = new URLSearchParams(new URL(lastPage.next).search);
        return Number(urlParams.get('page')) || undefined;
      }
      return undefined;
    },
    getPreviousPageParam: (firstPage) => {
      if (firstPage?.previous) {
        const urlParams = new URLSearchParams(
          new URL(firstPage.previous).search
        );
        return Number(urlParams.get('page')) || undefined;
      }
      return undefined;
    },
  });

  /**
   * Обчислює загальну кількість сторінок на основі загальної кількості елементів та розміру сторінки.
   */
  const totalCount = Math.ceil(
    (data?.pages[0]?.count || 0) / (params?.pageSize || 1)
  );

  return {
    data,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    refetch,
    isLoading,
    isError,
    error,
    totalCount,
  };
}
