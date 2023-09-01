export interface IProduct {
    _id: string,
    name: string,
    type: string,
    img: string,
    price: {
        old: number,
        current: number
    },
    stars: number,
    reviews: number,
    categoryId: string
}

export interface IProductOrder {
    id: string
    product: IProduct,
    size: number,
    quanlity: number,
    color: string,
    isChecked: boolean,
    price: number
}

export interface ICategory {
    _id: string,
    title: string,
}