import { useAppSelector } from '../../hooks/redux';

import CatalogItems from '../CatalogItems/CatalogItems';
import CategoriesList from '../CategoriesList/CategoriesList';

import './Catalog.css';

export default function Catalog({ children }: { children?: React.ReactNode }) {
  const { categories } = useAppSelector((state) => state.categories);
  const { isLoading, items } = useAppSelector((state) => state.catalog);
  const { value } = useAppSelector((state) => state.searchForm);

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      {children && children}
      <CategoriesList />
      {categories.length > 1 && <CatalogItems />}
      {value && items.length === 0 && !isLoading &&
      <div className="alert alert-info">
        <p>Ничего не найдено.</p>
        <p>Попробуйте поискать другое...</p>
      </div>
      }
    </section>
  );
}
