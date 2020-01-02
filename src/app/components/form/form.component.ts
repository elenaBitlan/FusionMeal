import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { IDay } from 'app/interfaces/day.interface';
import { IOrder } from 'app/interfaces/order.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, AfterViewInit {
  public day: IDay;
  public thisCurrentWeek: IDay[];
  public arrayForm: FormArray;
  public myGroup: FormGroup;

  public itemsPerSlide;
  public singleSlideOffset = false;
  public noWrap = !false;
  public width: any;
  public showCarusel = true;
  public showIndicators = false;
  public daysArray: string[] = [
    'Monday',
    'Tuesday',
    'Wednesday ',
    'Thursday',
    'Friday',
  ];

  constructor(
    private orderService: OrderService,
    public datepipe: DatePipe,
    private cdr: ChangeDetectorRef,
  ) { }

  public food(i) {
    console.log(this.arrayForm.controls[i]);
    const first = this.arrayForm.controls[i].value.first;
    const second = this.arrayForm.controls[i].value.second;
    const date = this.arrayForm.controls[i].value.date;

    const id = this.arrayForm.controls[i].value.id;
    const formatedDate = new Date(date).getTime();
    const today = new Date().getTime();
    const firstPrice = 25;
    const secondPrice = 25;
    const total = firstPrice * first + secondPrice * second;

    if (formatedDate < today) {
      alert(`You can't go to the past`);
      return;
    }

    if (first === 0 && second === 0) {
      alert(`You haven't order anything`);
      return;
    }
    const order: IOrder = {
      _id: id,
      date: date,
      order: {
        first: {
          value: first,
          option: '',
        },
        second: {
          value: second,
          option: '',
        },
      },
      options: {
        first: [],
        second: [],
      },
    };
    return this.orderService
      .postOrder(order)
      .subscribe();
  }

  public ngOnInit(): void {
    this.orderService.getCurrentWeek().subscribe((days: IDay[]) => {
      this.thisCurrentWeek = days;

      this.arrayForm = new FormArray(
        days.map((day, index) => {
          return new FormGroup({
            first: new FormControl(day.order.first.value),
            second: new FormControl(day.order.second.value),
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
    }, 0);
  }
  public ngAfterViewInit() {
    this.onResize(window);
  }
}