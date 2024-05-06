import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getSearchResult } from "../../redux/actions/actionCreator";
import { setSearchValue } from "../../redux/reducers/ctrlSearchFormSlice";

import "./SearchForm.css";

export default function SearchForm() {
    const { value } = useAppSelector((state) => state.searchForm);
    const { offset } = useAppSelector((state) => state.catalog);
    const { activeCategoryId } = useAppSelector((state) => state.categories)
    const dispatch = useAppDispatch();

    return (
        <form className="catalog-search-form form-inline">
            <input
                onChange={({ target }) => {
                    dispatch(setSearchValue(target.value));
                    dispatch(getSearchResult(target.value, activeCategoryId, offset));
                }}
                value={value}
                className="form-control"
                placeholder="Поиск"
            />
        </form>
    )
}
