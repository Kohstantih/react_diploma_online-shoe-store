import { Link } from "react-router-dom";

import { useAppDispatch } from "../../hooks/redux";
import { updateItems } from "../../redux/reducers/setCartSlice";

import { TCartItemObject, TCartItemProps } from "../../types/TCartItemProps";

export default function CartItem({ object, index }: TCartItemProps) {
    const dispatch = useAppDispatch();

    const deleteCartItem = () => {
        const cartJson = (sessionStorage.getItem('cart'));
        if (cartJson) {
            const cart: TCartItemObject[] = JSON.parse(cartJson);
            const cartFiltered = cart.filter((item) => item.id !== object.id && item.size !== object.size);
            dispatch(updateItems(cartFiltered));
            sessionStorage.setItem('cart', JSON.stringify(cartFiltered));
        }
    }

    return (
        <tr>
            <td scope="row">{index += 1}</td>
            <td><Link to={`/catalog/${object.id}`}>{object.name}</Link></td>
            <td>{object.size}</td>
            <td>{object.count}</td>
            <td>{object.price} руб.</td>
            <td>{object.price * object.count} руб.</td>
            <td>
                <button
                    onClick={deleteCartItem}
                    className="btn btn-outline-danger btn-sm"
                >Удалить</button>
            </td>
        </tr>
    )
}