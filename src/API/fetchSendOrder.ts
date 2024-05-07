import { TOrderSendObject } from '../types/TOrderSendObject';

export default async function fetchSendOrder(data: TOrderSendObject) {
  const dataJson = JSON.stringify(data);

  const response = await fetch(`${import.meta.env.VITE_APP_API_URL}order`, {
    method: 'POST',
    body: dataJson,
  });

  if (!response.ok) {
    throw new Error('Не удалось загрузить Хиты Продаж');
  }

  return true;
}
