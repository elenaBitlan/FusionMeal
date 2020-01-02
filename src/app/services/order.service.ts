import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { IDay } from '../interfaces/day.interface';
import { IOrder } from '../interfaces/order.interface';
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  public currentWeek: IDay[];

  constructor(private http: HttpClient) { }

  public getCurrentWeek(): Observable<any> {
    return this.http.get(`api/order/get-week`)
      .pipe(tap((results) => {
        return this.currentWeek = results as IDay[];
      }, (error) => console.error(error)));
  }
  public postOrder(order: IOrder): any {
    return this.http.post<IOrder>(`api/order`, { ...order })
      .pipe(tap());
  }
}
