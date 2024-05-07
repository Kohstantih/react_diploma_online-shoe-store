export default async function fetchTopSales() {
  const response = await fetch(`${import.meta.env.VITE_APP_API_URL}top-sales`);

  if (!response.ok) {
    throw new Error('Не удалось загрузить Хиты Продаж');
  }

  return await response.json();
}
