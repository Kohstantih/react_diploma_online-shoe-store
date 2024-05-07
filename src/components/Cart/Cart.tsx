import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { updateItems } from '../../redux/reducers/setCartSlice';

import CartItem from './CartItem';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

export default function Cart() {
  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const cartJson = sessionStorage.getItem('cart');
    cartJson && dispatch(updateItems(JSON.parse(cartJson)));
  }, [dispatch]);

  return (
    <>
      <section className="cart">
        <h2 className="text-center">Корзина</h2>
        {items.length === 0 && (
          <>
            <p>Корзина пуста...</p>
            <p>Перейдите в каталог, для выбора товаров</p>
          </>
        )}
        {items.length > 0 && (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Название</th>
                <th scope="col">Размер</th>
                <th scope="col">Кол-во</th>
                <th scope="col">Стоимость</th>
                <th scope="col">Итого</th>
                <th scope="col">Действия</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <CartItem key={index} object={item} index={index} />
              ))}
              <tr>
                <td colSpan={5} className="text-right">
                  Общая стоимость
                </td>
                <td>
                  {items.reduce(
                    (acc, item) => acc + item.count * item.price,
                    0
                  )}{' '}
                  руб.
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </section>
      {items.length > 0 && <CheckoutForm />}
    </>
  );
}
