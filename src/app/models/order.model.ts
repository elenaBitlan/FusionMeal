export class Order {

    public order = {
        first: {
            value: 0,
            option: '',
        },
        second: {
            value: 0,
            option: '',
        },
    };
    public options = {
        first: [],
        second: [],
    };
    constructor(private _id: string | null = null, private date: string = '', first: number, second: number) {
        this.order.first.value = first;
        this.order.second.value = second;
    }
}