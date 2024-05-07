import { TGetCatalogItemsMoreArgs } from '../types/TGetCatalogItemsMoreArgs';

export default async function fetchCatalogItemsMore({
  offset,
  id,
  search,
}: TGetCatalogItemsMoreArgs) {
  let endpoint = id
    ? `?categoryId=${id}&offset=${offset}`
    : `?offset=${offset}`;
  if (search) endpoint += `&q=${search}`;

  const response = await fetch(
    `${import.meta.env.VITE_APP_API_URL}items${endpoint}`
  );

  if (!response.ok) {
    throw new Error('Не удалось загрузить каталог');
  }

  return await response.json();
}
