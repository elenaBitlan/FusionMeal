import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IDay } from '../interfaces/day.interface';
import { IOrder } from '../interfaces/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  currentWeek: IDay[];

  constructor(private http: HttpClient, ) { }

  getCurrentWeek(): Observable<any> {
    return this.http.get(`api/order/get-week`)
      .pipe(tap(results => {
        console.log(results);
        return this.currentWeek = results as IDay[];
      }, error => console.error(error)));

  }

  postOrder(order: IOrder): any {
    return this.http.post<IOrder>(`api/order`, { ...order })
      .pipe(tap(result => console.log(result)))


  }
}
