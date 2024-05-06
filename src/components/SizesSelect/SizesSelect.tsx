import { TSizesSelectProps } from "../../types/TSizesSelectProps";

import "./SizesSelect.css";

export default function SizesSelect({ sizesList, active, changeActive }: TSizesSelectProps) {
    return (
        <p>
            Размеры в наличии: {
                sizesList.map((s, index) => {
                    if (!s.available) return;
                    const sizeClasses = s.size === active ? 'catalog-item-size selected' : 'catalog-item-size'

                    return (
                        <span
                            onClick={() => changeActive(s.size)}
                            key={index}
                            style={{
                                cursor: 'pointer'
                            }}
                            className={sizeClasses}
                        >{s.size}</span>
                    )
                })
            }
        </p>
    )
}
