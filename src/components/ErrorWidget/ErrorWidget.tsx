import { TErrorWidgetProps } from "../../types/TErrorWidgetProps";

import "./ErrorWidget.css";

export default function ErrorWidget({ text, request }: TErrorWidgetProps) {
    return (
        <div className="error_container">
            <h4>Произошла ошибка</h4>
            <p>{text}</p>
            <button
                onClick={request}
                type="button"
                className="btn btn-secondary"
            >Повторить запрос</button>
        </div>        
    )
}
