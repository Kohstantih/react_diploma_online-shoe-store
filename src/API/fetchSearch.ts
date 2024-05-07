import { TSearchArgs } from '../types/TSearchArgs';

export default async function fetchSearch({ search, id, offset }: TSearchArgs) {
  let endpoint = `items?q=${search}`;
  if (id) endpoint += `&categoryId=${id}`;
  if (offset) endpoint += `&offset=${offset}`;

  const response = await fetch(
    `${import.meta.env.VITE_APP_API_URL}${endpoint}`
  );

  if (!response.ok) {
    throw new Error('Не удалось загрузить каталог');
  }

  return await response.json();
}
