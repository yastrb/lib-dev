import { TBook } from "types/TBook"

// 📌 Список Книжок (з пагінацією)
export interface TListBooks {
  totalElements: number
  totalPages: number
  pageable: Pageable
  numberOfElements: number
  size: number
  content: TBook[];
  number: number
  sort: Sort2
  first: boolean
  last: boolean
  empty: boolean

}

export interface Sort {
  unsorted: boolean
  sorted: boolean
  empty: boolean
}

export interface Sort2 {
  unsorted: boolean
  sorted: boolean
  empty: boolean
}
export interface Pageable {
  unpaged: boolean
  paged: boolean
  pageSize: number
  pageNumber: number
  offset: number
  sort: Sort
}