import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';

import { IDay } from '../interfaces/day.interface';
import { Order } from '../models/order.model';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';

@Injectable()
export class OrderService {
  public currentWeek: IDay[];

  constructor(
    private http: HttpClient,
  ) { }

  public getCurrentWeeks(): Observable<Object> {
    const currentWeek = this.http.get(`api/order/get-week`);
    const nextWeek = this.http.get(`api/order/get-next-week`);

    return forkJoin([currentWeek, nextWeek]);

  }

  public postOrder(order: Order) {
    return this.http.post<Order>(`api/order`, order);
  }
}
