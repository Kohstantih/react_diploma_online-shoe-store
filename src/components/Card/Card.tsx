import { Link } from "react-router-dom";

import { useAppDispatch } from "../../hooks/redux";
import { activationProductDetails } from "../../redux/reducers/setActiveProductSlice";

import { TCardObject } from "../../types/TCardObject";

import "./Card.css";

export default function Card({ cardObj }: { cardObj: TCardObject }) {
    const { id, title, price, images } = cardObj;
    const dispatch = useAppDispatch();

    return (
        <div className="col-4 card-wrapper">
            <div className="card catalog-item-card h-100">
                <img src={images[0]} className="card-img-top img-fluid" alt={title} />
                <div className="card-body flex-grow-0">
                    <p className="card-text">{title}</p>
                    <p className="card-text">{price} руб.</p>
                    <Link
                        to={`/catalog/${id}`}
                        onClick={() => {
                            dispatch(activationProductDetails());
                        }}
                        className="btn btn-outline-primary"
                    >Заказать</Link>
                </div>
            </div>
        </div>
    )
}