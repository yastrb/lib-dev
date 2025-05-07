
// 📌 Запит на реєстрацію Книги
export interface TBookRequest {
  category_id: number;
  book_type: number;
  name: string;
  capacity: number;
  status: number;
  description: string;
  street: string;
  number_of_bedrooms: number;
  number_of_beds: number;
  number_of_bathrooms: number;
  price: string;
  is_draft: boolean;
  uploaded_images: string[];
  image: string;
  slug: string;
  building_number: string;
  apartment: string;
  city: string;
  region: string;
  latitude: number;
  longitude: number;
  heating_system: boolean;
  cooling_system: boolean;
  internet: boolean;
  laundry_services: boolean;
  tv: boolean;
  iron: boolean;
  workplace: boolean;
  pool: boolean;
  spa: boolean;
  jacuzzi: boolean;
  vat: boolean;
  sauna: boolean;
  fireplace: boolean;
  gazebo: boolean;
  terrace: boolean;
  barbecue_area: boolean;
  hammocks: boolean;
  garden_furniture: boolean;
  pets_farm: boolean;
  riding: boolean;
  hiking_walking: boolean;
  fishing: boolean;
  swimming: boolean;
  boating: boolean;
  alpine_skiing: boolean;
  meditation_yoga: boolean;
  sports_area: boolean;
  game_area: boolean;
  events_excursions: boolean;
  national_park: boolean;
  sea: boolean;
  lake: boolean;
  stream: boolean;
  waterfall: boolean;
  thermal_springs: boolean;
  mountains: boolean;
  salt_caves: boolean;
  beautiful_views: boolean;
  cot_for_babies: boolean;
  bathroom_in_room: boolean;
  kitchen_in_room: boolean;
  dining_area: boolean;
  microwave: boolean;
  plate: boolean;
  refrigerator: boolean;
  kitchen_on_territory: boolean;
  no_kitchen: boolean;
  breakfast_included: boolean;
  lunch_included: boolean;
  dinner_included: boolean;
  all_inclusive: boolean;
  room_service: boolean;
  bar: boolean;
  restaurant: boolean;
  instant_booking: boolean;
  reception_24: boolean;
  free_cancellation: boolean;
  allowed_with_animals: boolean;
  suitable_for_children: boolean;
  suitable_for_groups: boolean;
  can_order_transfer: boolean;
  car_charging_station: boolean;
  place_for_car: boolean;
  projector_and_screen: boolean;
  area_for_events: boolean;
  territory_under_protection: boolean;
  cloakroom: boolean;
  without_thresholds: boolean;
  no_ladder: boolean;
  bath_with_handrails: boolean;
  toilet_with_handrails: boolean;
  shower_chair: boolean;
  suitable_for_guests_in_wheelchairs: boolean;
  room_on_first_flor: boolean;
  zip_code: string;
  single_beds: number;
  double_beds: number;
  guests: number;
  checkin_time: string;
  checkout_time: string;
  smoking_allowed: boolean;
  parties_allowed: boolean;
  winter: boolean;
  spring: boolean;
  summer: boolean;
  autumn: boolean;
  earnings_owner: string;
  earnings_base_price: string;
  earnings_tourist_taxes: string;
  earnings_platform_fee: string;
  terms_agreed: boolean;
  title: string;
}

// 📌 Список Книжок (з пагінацією)
export interface TListBooks {
  count: number;
  next: string | null;
  previous: string | null;
  page: number;
  pageSize: number;
  results: TBook[];
}

// 📌 Оновлення даних Книги
export type TBookUpdate = Omit<
  TBook,
  'id' | 'owner' | 'category' | 'created_at' | 'updated_at'
>;

// 📌 Часткове оновлення даних Книги
export type TBookPartialUpdate = Partial<TBookUpdate>;

// 📌 Запит на зміну статусу активності Книги
export type TBookActivation = Pick<TBook, 'is_active'>;

// 📌 Запит на схвалення Книги модератором
export type TBookApproval = Pick<TBook, 'is_approved'>;

// 📌 Запит на збереження Книги як чернетки
export type TBookDraft = Pick<TBookRequest, 'is_draft'>;

// 📌 Запит на приховування Книги з каталогу
export type TBookVisibility = Pick<TBook, 'is_hidden'>;

// 📌 Запит на оновлення зображень Книги
export type TBookImages = Pick<TBookRequest, 'image' | 'uploaded_images'>;

// 📌 Запит на часткове оновлення зображень Книги
export type TBookImagesPartial = Partial<
  Pick<TBookRequest, 'image' | 'uploaded_images'>
>;

// 📌 Відповідь після оновлення зображень Книги
export type TBookImagesResponse = Pick<TBook, 'images'>;

// 📌 Запит на зміну рівня преміум-статусу Книги
export type TBookPremiumLevel = Pick<TBook, 'premium_level'>;

// 📌 Запит на зміну пріоритетності відображення Книги
export type TBookPriority = Pick<TBook, 'priority'>;

// 📌 Запит на оновлення рейтингу Книги
export type TBookRating = Pick<TBook, 'rating'>;

// 📌 Запит на верифікацію Книги
export type TBookVerification = Pick<TBook, 'is_verified'>;
