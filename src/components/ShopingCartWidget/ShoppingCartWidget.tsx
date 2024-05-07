import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { updateItems } from '../../redux/reducers/setCartSlice';

export default function ShoppingCartWidget() {
  const { count } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const cartJson = sessionStorage.getItem('cart');
    if (cartJson) dispatch(updateItems(JSON.parse(cartJson)));
  }, [dispatch]);

  return (
    <Link to={'/cart'}>
      <div className="header-controls-pic header-controls-cart">
        {count !== 0 && (
          <div className="header-controls-cart-full">{count}</div>
        )}
        <div className="header-controls-cart-menu"></div>
      </div>
    </Link>
  );
}
