import { TSearchFormHeaderWidgetProps } from "../../types/TSearchFormHeaderWidgetProps";

export default function SearchFormHeaderWidget({ value, setValue }: TSearchFormHeaderWidgetProps) {
    return (
        <form className={`header-controls-search-form form-inline`}>
            <input
                onChange={({ target }) => setValue(target.value)}
                value={value}
                className="form-control"
                placeholder="Поиск"
            />
        </form>
    )
}
