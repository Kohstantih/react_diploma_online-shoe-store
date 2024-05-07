import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getProductDetails } from '../../redux/actions/actionCreator';
import { updateItems } from '../../redux/reducers/setCartSlice';
import { resetActiveProduct } from '../../redux/reducers/setActiveProductSlice';

import Loader from '../Loader/Loader';
import ButtonChangeCount from '../ButtonChangeCount/ButtonChangeCount';
import SizesSelect from '../SizesSelect/SizesSelect';
import ErrorWidget from '../ErrorWidget/ErrorWidget';

import { TCartItemObject } from '../../types/TCartItemProps';

export default function ProductDetails() {
  const { id } = useParams();
  const [countProduct, setCountProduct] = useState(0);
  const [sizeSelected, setSizeSelected] = useState('');
  const navigator = useNavigate();
  const { product, isLoading, error } = useAppSelector(
    (state) => state.details
  );
  const dispatch = useAppDispatch();

  const decrement = () =>
    setCountProduct((count) => {
      count -= 1;
      if (count < 0) return 0;
      return count;
    });

  const increment = () =>
    setCountProduct((count) => {
      count += 1;
      if (count > 10) return 10;
      return count;
    });

  const addProductToCart = () => {
    if (!product || !countProduct || !sizeSelected) return;
    const cartItem = {
      id: product.id,
      name: product.title,
      size: sizeSelected,
      count: countProduct,
      price: product.price,
    };

    const cartJson = sessionStorage.getItem('cart');
    let cart: TCartItemObject[] | null = cartJson ? JSON.parse(cartJson) : null;

    if (cart) {
      const oldItem = cart.find(
        (o) => o.id === cartItem.id && o.size === cartItem.size
      );

      if (oldItem) {
        cart.map((o) => {
          if (o.id === cartItem.id && o.size === cartItem.size)
            o.count += cartItem.count;
          return o;
        });
      } else {
        cart = [...cart, cartItem];
      }

      sessionStorage.setItem('cart', JSON.stringify(cart));
      dispatch(updateItems(cart));
    } else {
      sessionStorage.setItem('cart', JSON.stringify([cartItem]));
      dispatch(updateItems([cartItem]));
    }

    navigator('/cart');
  };

  useEffect(() => {
    id && dispatch(getProductDetails(id));

    return () => {
      dispatch(resetActiveProduct());
    };
  }, [dispatch, id]);

  return (
    <>
      {isLoading && <Loader />}
      {error && (
        <ErrorWidget
          text={error}
          request={() => id && dispatch(getProductDetails(id))}
        />
      )}
      {product && (
        <section className="catalog-item">
          <h2 className="text-center">{product.title}</h2>
          <div className="row">
            <div className="col-5">
              <img
                src={product.images[0]}
                className="img-fluid"
                alt={`Изображение товара: ${product.title}`}
              />
            </div>
            <div className="col-7">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>Артикул</td>
                    <td>{product.sku}</td>
                  </tr>
                  <tr>
                    <td>Производитель</td>
                    <td>{product.manufacturer}</td>
                  </tr>
                  <tr>
                    <td>Цвет</td>
                    <td>{product.color}</td>
                  </tr>
                  <tr>
                    <td>Материалы</td>
                    <td>{product.material}</td>
                  </tr>
                  <tr>
                    <td>Сезон</td>
                    <td>{product.season}</td>
                  </tr>
                  <tr>
                    <td>Повод</td>
                    <td>{product.reason}</td>
                  </tr>
                </tbody>
              </table>
              {product.sizes.length > 0 && (
                <>
                  <div className="text-center">
                    <SizesSelect
                      active={sizeSelected}
                      changeActive={setSizeSelected}
                      sizesList={product.sizes}
                    />
                    <p>
                      Количество:{' '}
                      <span className="btn-group btn-group-sm pl-2">
                        <ButtonChangeCount title={'-'} setCount={decrement} />
                        <span className="btn btn-outline-primary">
                          {countProduct}
                        </span>
                        <ButtonChangeCount title={'+'} setCount={increment} />
                      </span>
                    </p>
                  </div>
                  <button
                    onClick={addProductToCart}
                    className="btn btn-danger btn-block btn-lg"
                  >
                    В корзину
                  </button>
                </>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
