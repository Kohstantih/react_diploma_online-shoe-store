import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getTopSales } from "../../redux/actions/actionCreator";
import { resetTopSales } from "../../redux/reducers/setTopSalesSlice";

import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import ErrorWidget from "../ErrorWidget/ErrorWidget";

export default function TopSales() {
    const { isLoading, topSales, error } = useAppSelector((state) => state.topSales);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTopSales());       
        return () => {
            dispatch(resetTopSales())
        }
    }, [dispatch])

    return (
        <>
            {(topSales.length > 0 || isLoading || error) &&
            <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            {isLoading && <Loader />}
            {error && <ErrorWidget text={error} request={() => dispatch(getTopSales())} />}
            {topSales.length > 0 &&
                <div className="row">
                {topSales.map((item) => <Card key={item.id} cardObj={item} />)}
            </div>}
            </section>}
        </>
    )
}