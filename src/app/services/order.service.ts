import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/internal/operators/tap';
import { Observable } from 'rxjs/internal/Observable';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';

import { Order } from '../models/order.model';
import { IDay } from '../interfaces/day.interface';

@Injectable()
export class OrderService {
  public currentWeek: IDay[];

  constructor(
    private http: HttpClient,
  ) { }

  public getCurrentWeek(): Observable<any> {
    const currentWeek = this.http.get(`api/order/get-week`);
    const nextWeek = this.http.get(`api/order/get-next-week`);

    return forkJoin([currentWeek, nextWeek])
      .pipe(
        tap((results) => {
          return results;
        }),
      );

  }

  public postOrder(order: Order): any {
    return this.http.post<Order>(`api/order`, order);
  }
}
