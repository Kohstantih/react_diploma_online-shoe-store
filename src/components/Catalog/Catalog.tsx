import { useAppSelector } from '../../hooks/redux';

import CatalogItems from '../CatalogItems/CatalogItems';
import CategoriesList from '../CategoriesList/CategoriesList';

import './Catalog.css';

export default function Catalog({ children }: { children?: React.ReactNode }) {
  const { categories } = useAppSelector((state) => state.categories);
  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      {children && children}
      <CategoriesList />
      {categories.length > 1 && <CatalogItems />}
    </section>
  );
}
