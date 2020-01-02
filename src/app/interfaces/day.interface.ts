export interface IDay {

    _id: string,
    date: string,
    order: {
        first: {
            value: number,
            option: string,
        },
        second: {
            value: number,
            option: string,
        },
        total: number,
    },
    options: {
        first: [],
        second: [],

    },
}