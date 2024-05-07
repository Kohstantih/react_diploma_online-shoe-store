export default async function fetchCategories() {
  const response = await fetch(`${import.meta.env.VITE_APP_API_URL}categories`);

  if (!response.ok) {
    throw new Error('Не удалось загрузить список категорий');
  }

  return await response.json();
}
