export default async function fetchProductDetails(id: string) {
  const response = await fetch(
    `${import.meta.env.VITE_APP_API_URL}items/${id}`
  );

  if (!response.ok) {
    throw new Error('Не удалось загрузить каталог');
  }

  return await response.json();
}
