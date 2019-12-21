import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit {

  itemsPerSlide = 5;
  singleSlideOffset = false;
  noWrap = !false;
  width: any;
  showCarusel = true;
  showIndicators = false;

  slides = [
    {
      image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg',
      day: 'Monday',
      date: 'dd/mm/yyyy'
    },
    {
      image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg', day: 'Monday',
      date: 'dd/mm/yyyy'
    },

    {
      image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg', day: 'Monday',
      date: 'dd/mm/yyyy'
    },
    {
      image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/4.jpg', day: 'Monday',
      date: 'dd/mm/yyyy'
    },
    {
      image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/5.jpg', day: 'Monday',
      date: 'dd/mm/yyyy'
    },
    {
      image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/6.jpg', day: 'Monday',
      date: 'dd/mm/yyyy'
    },
    {
      image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/7.jpg', day: 'Monday',
      date: 'dd/mm/yyyy'
    },
    {
      image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/8.jpg', day: 'Monday',
      date: 'dd/mm/yyyy'
    },
    {
      image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg', day: 'Monday',
      date: 'dd/mm/yyyy'
    },
    {
      image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg', day: 'Monday',
      date: 'dd/mm/yyyy'
    }
  ];
  constructor(
    private cdr: ChangeDetectorRef,
  ) { }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = event.target.innerWidth;
    if (this.width < 992) {
      console.log(this.itemsPerSlide);
      this.itemsPerSlide = 1;
      this.showCarusel = false;
      this.cdr.detectChanges();
      setTimeout(() => {
        this.showCarusel = true;
        this.cdr.detectChanges();
      }, 0);
    } else {
      console.log(this.itemsPerSlide);
      this.itemsPerSlide = 5;
      this.showCarusel = false;
      this.cdr.detectChanges();
      setTimeout(() => {
        this.showCarusel = true;
        this.cdr.detectChanges();
      }, 0);
    }
  }
  ngOnInit() {
    //to do:make this thing work
    // this.onResize(window.open);

  }




}











