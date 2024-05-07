import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getCategories } from '../../redux/actions/actionCreator';
import {
  changeActiveCategory,
  resetCategories,
} from '../../redux/reducers/setCategoriesSlice';

import Loader from '../Loader/Loader';
import ErrorWidget from '../ErrorWidget/ErrorWidget';

import './CategoriesList.css';

export default function CategoriesList() {
  const { isLoading, categories, error, activeCategoryId } = useAppSelector(
    (state) => state.categories
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());

    return () => {
      dispatch(resetCategories());
    };
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {error && (
        <ErrorWidget text={error} request={() => dispatch(getCategories())} />
      )}
      {categories.length > 1 && (
        <ul className="catalog-categories nav justify-content-center">
          {categories.map((item) => {
            const categoriesClassName =
              item.id === activeCategoryId ? 'nav-link active' : 'nav-link';

            return (
              <li key={item.id} className={categoriesClassName}>
                <a
                  onClick={(e) => {
                    e.preventDefault;
                    dispatch(changeActiveCategory(item.id));
                  }}
                  className={categoriesClassName}
                  href="#"
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
