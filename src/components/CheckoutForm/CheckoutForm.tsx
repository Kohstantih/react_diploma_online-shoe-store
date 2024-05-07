import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { sendOrder } from '../../redux/actions/actionCreator';
import { resetSendingOrder } from '../../redux/reducers/sendOrderSlice';
import { resetCart } from '../../redux/reducers/setCartSlice';

import Loader from '../Loader/Loader';

export default function CheckoutForm() {
  const { isLoading, error, isSuccessFul } = useAppSelector(
    (state) => state.order
  );
  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (isSuccessFul) {
      reset();
      setTimeout(() => {
        dispatch(resetSendingOrder());
        dispatch(resetCart());
        sessionStorage.removeItem('cart');
      }, 2000);
    }
  }, [dispatch, isSuccessFul, reset]);

  return (
    <>
      {isLoading && <Loader />}
      {isSuccessFul && (
        <p className="alert alert-success">Заказ успешно оформлен</p>
      )}
      {error && (
        <p className="alert alert-danger">
          Не удалось оформить заказ. Повторите попытку...
        </p>
      )}
      {!isLoading && !isSuccessFul && (
        <section className="order">
          <h2 className="text-center">Оформить заказ</h2>
          <div className="card" style={{ maxWidth: '30rem', margin: '0 auto' }}>
            <form
              onSubmit={handleSubmit((data) => {
                const owner = { phone: data.phone, address: data.address };
                dispatch(sendOrder(owner, items));
              })}
              className="card-body"
            >
              <div className="form-group">
                <label htmlFor="phone">Телефон</label>
                <input
                  {...register('phone', { required: true })}
                  className="form-control"
                  id="phone"
                  placeholder="Ваш телефон"
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Адрес доставки</label>
                <input
                  {...register('address', { required: true })}
                  className="form-control"
                  id="address"
                  placeholder="Адрес доставки"
                />
              </div>
              <div className="form-group form-check">
                <input
                  required={true}
                  type="checkbox"
                  className="form-check-input"
                  id="agreement"
                />
                <label className="form-check-label" htmlFor="agreement">
                  Согласен с правилами доставки
                </label>
              </div>
              <button type="submit" className="btn btn-outline-secondary">
                Оформить
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
}
