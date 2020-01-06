import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit,
  HostListener,
} from '@angular/core';

import { FormControl, FormGroup, FormArray } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { OrderService } from '../../services/order.service';
import { IDay } from 'app/interfaces/day.interface';
import { Order } from 'app/models/order.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, AfterViewInit {
  public day: IDay;
  public arrayForm: FormArray;
  public myGroup: FormGroup;

  public itemsPerSlide;
  public singleSlideOffset = false;
  public noWrap = false;
  public width: any;
  public showCarusel = true;
  public showIndicators = false;
  public weekDays: string[] = [
    'Monday',
    'Tuesday',
    'Wednesday ',
    'Thursday',
    'Friday',
    'Monday',
    'Tuesday',
    'Wednesday ',
    'Thursday',
    'Friday',
  ];
  public foodOptionFirst = [];
  public foodOptionSecond = [];

  constructor(
    private orderService: OrderService,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService,
  ) { }

  public ngOnInit(): void {
    this.orderService.getCurrentWeek().subscribe((days) => {
      const weeks = [...days[0], ...days[1]];
      this.foodOptionFirst = weeks[0].options.first;
      this.foodOptionSecond = weeks[0].options.second;

      this.arrayForm = new FormArray(
        weeks.map((day, index) => {
          return new FormGroup({
            first: new FormControl(day.order.first.value),
            firstOption: new FormControl(day.order.first.options),
            second: new FormControl(day.order.second.value),
            secondOption: new FormControl(day.order.second.options),
            date: new FormControl(day.date),
            id: new FormControl(day._id),
            dayOfWeek: new FormControl(index),

          });
        }),
      );
      this.myGroup = new FormGroup({
        formArray: this.arrayForm,

      });
    });

  }

  public ngAfterViewInit() {
    this.onResize(window);
  }

  @HostListener('window:resize', ['$event.target'])
  public onResize(target) {
    this.width = target.innerWidth;
    if (this.width < 1440) {
      this.itemsPerSlide = 1;
    } else {
      this.itemsPerSlide = 5;
    }

    this.showCarusel = false;
    this.cdr.detectChanges();
    setTimeout(() => {
      this.showCarusel = true;
      this.cdr.detectChanges();
    });
  }

  public food(index) {
    const {
      id,
      date,
      first,
      second,
      firstOption,
      secondOption,

    } = this.arrayForm.controls[index].value;
    const formatedDate = new Date(date).getTime();
    const now = new Date().getTime();
    const firstPrice = 10;
    const secondPrice = 30;
    const total = firstPrice * first + secondPrice * second;

    if (formatedDate < now) {
      this.toastr.error(`Too late`);
      return;
    }

    if (first === 0 && second === 0) {
      this.toastr.warning(`You haven't order anything`);
      return;
    }

    this.toastr.success(`Your order was placed,price is ${total}`);

    const order = new Order(id, date, first, second, firstOption, secondOption);
    return this.orderService
      .postOrder(order)
      .subscribe();
  }

}