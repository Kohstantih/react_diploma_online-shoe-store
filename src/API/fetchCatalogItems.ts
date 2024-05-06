export default async function fetchCatalogItems(id: number | null) {
    const endpoint = id ? `items?categoryId=${id}` : 'items';

    const response = await fetch(`${import.meta.env.VITE_APP_API_URL}${endpoint}`);

    if (!response.ok) {
        throw new Error('Не удалось загрузить каталог')
    }
    
    return await response.json();
}
