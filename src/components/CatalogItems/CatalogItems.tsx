import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getCatalogItems, getCatalogItemsMore, getSearchResult } from "../../redux/actions/actionCreator";
import { resetCatalog } from "../../redux/reducers/setCatalogItemSlice";

import Card from "../Card/Card";
import ErrorWidget from "../ErrorWidget/ErrorWidget";
import Loader from "../Loader/Loader";

export default function CatalogItems() {
    const { isLoading, items, offset, error } = useAppSelector((state) => state.catalog);
    const { activeCategoryId } = useAppSelector((state) => state.categories);
    const { value: search } = useAppSelector((state) => state.searchForm);
    const dispatch = useAppDispatch();    

    useEffect(() => {
        if (search) dispatch(getSearchResult(search, activeCategoryId, 0))
        else dispatch(getCatalogItems(activeCategoryId));
        
        return () => {
            dispatch(resetCatalog())
        }
    }, [activeCategoryId, dispatch, search]);
    
    return (
        <>
            {items.length !== 0 &&
            <div className="row">
                {items.length !==0 &&
                items.map((item) => <Card key={item.id} cardObj={item} />)}
            </div>}
            {offset !==0 && !isLoading && !error &&
            <div className="text-center">
                <button
                    onClick={() => {
                        dispatch(dispatch(getCatalogItemsMore(offset, activeCategoryId, search)))
                    }}
                    className="btn btn-outline-primary"
                >Загрузить ещё</button>
            </div>}
            {isLoading && <Loader />}
            {error &&
            <ErrorWidget
                text={error}
                request={() => {
                    if (search) dispatch(getSearchResult(search, activeCategoryId, offset))
                    else dispatch(getCatalogItems(activeCategoryId))
                }} 
            />}
        </>
    )
}
