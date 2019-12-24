import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { IDay } from 'app/interfaces/day.interface';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  currentWeek :IDay[];
  constructor(
    private orderService: OrderService
  ) { }

  




  ngOnInit(): void {
    
    this.orderService.getCurrentWeek().
    subscribe((days:IDay[])=>{
      this.currentWeek = days;
    });
  }




}





