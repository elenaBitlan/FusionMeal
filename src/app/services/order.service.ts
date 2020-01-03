import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/internal/operators/tap';
import { Observable } from 'rxjs/internal/Observable';

import { IDay } from '../interfaces/day.interface';
import { Order } from '../models/order.model';

@Injectable()
export class OrderService {
  public currentWeek: IDay[];

  constructor(
    private http: HttpClient,
  ) { }

  public getCurrentWeek(): Observable<any> {
    return this.http.get(`api/order/get-week`)
      .pipe(
        tap((results) => {
          return this.currentWeek = results as IDay[];
        }, (error) => console.error(error)));
  }

  public postOrder(order: Order): any {
    return this.http.post<Order>(`api/order`, order);
  }
}
