export interface IOrder {
    _id: string
    date: string
    order: {
        first: {
            value: number,
            option: '',
        },
        second: {
            value: number,
            option: '',
        },
    }
    options: {
        first: [],
        second: [],
    }
}