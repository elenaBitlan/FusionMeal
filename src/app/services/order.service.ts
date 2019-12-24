import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IDay } from '../interfaces/day.interface';
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
}
