export class Order {
    public _id = '';
    public date = '';
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
    constructor(id, date, first, second) {
        this._id = id;
        this.date = date;
        this.order.first.value = first;
        this.order.second.value = second;
    }
}