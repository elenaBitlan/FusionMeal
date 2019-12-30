import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { IDay } from 'app/interfaces/day.interface';
import { IOrder } from 'app/interfaces/order.interface';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  currentWeek: IDay[];
  tableForm: FormGroup;
  day: any;
  thisCurrentWeek: any;
  arrayForm: any;
  myGroup: FormGroup;
  constructor(
    private orderService: OrderService,
    public datepipe: DatePipe,
  ) { }

  food(i) {
    console.log(this.arrayForm.controls[i]);
    let first = this.arrayForm.controls[i].value.first;
    let second = this.arrayForm.controls[i].value.second;
    let date = this.arrayForm.controls[i].value.date;

    let id = this.arrayForm.controls[i].value.id;
    let userID = 'altid';
    let formatedDate = new Date(date).getTime();
    let today = new Date().getTime()
    let firstPrice = 25;
    let secondPrice = 25;
    let total = ((firstPrice * first) + (secondPrice * second));
    let paymentState = false;
    let hz = 0;
    console.log(date, date);
    if (formatedDate < today) {
      alert("you cant go to the past");
      return;
    } else if (first === 0 && second === 0) {
      alert("you havent order nything")
      return;
    }

    alert(`Succes,your total is:${total}`);

    let order: IOrder = {
      _id: id,
      date: date,
      order: {
        first: {
          value: first,
          option: ""
        },
        second: {
          value: second,
          option: ""
        }
      },
      options: {
        first: [],
        second: []
      }

    }



    return this.orderService.postOrder(order).
      subscribe(res => console.log(res));
  }









  ngOnInit(): void {

    this.orderService.getCurrentWeek().
      subscribe((days: any) => {
        console.log(days)
        this.thisCurrentWeek = days;

        this.arrayForm = new FormArray(
          days.map((day, index) => {
            return new FormGroup({

              first: new FormControl(day.order.first.value),
              second: new FormControl(day.order.second.value),
              date: new FormControl(day.date),
              id: new FormControl(day._id),
              dayOfWeek: new FormControl(index)
            })
          })
        )
        this.myGroup = new FormGroup({
          formArray: this.arrayForm,
        })
      })




  }



}

