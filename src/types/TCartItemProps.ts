export type TCartItemObject = {
    id: number,
    name: string,
    size: string,
    count: number,
    price: number,
}

export type TCartItemProps = {
    object: TCartItemObject,
    index: number,
}
