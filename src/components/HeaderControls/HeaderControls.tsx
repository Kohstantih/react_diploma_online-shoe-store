import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/redux';
import { setSearchValue } from '../../redux/reducers/ctrlSearchFormSlice';
import SearchFormHeaderWidget from '../SearchFormHeaderWidget/SearchFormHeaderWidget';
import ShoppingCartWidget from '../ShopingCartWidget/ShoppingCartWidget';

export default function HeaderControls() {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const navigator = useNavigate();

  return (
    <div>
      <div className="header-controls-pics">
        <div
          onClick={() => {
            setIsActive((status) => !status);
            if (isActive && value) {
              dispatch(setSearchValue(value));
              setValue('');
              navigator('/catalog');
            }
          }}
          className="header-controls-pic header-controls-search"
        ></div>
        <ShoppingCartWidget />
      </div>
      {isActive && <SearchFormHeaderWidget value={value} setValue={setValue} />}
    </div>
  );
}
