
import { Component, ChangeDetectorRef, Inject, AfterViewInit } from '@angular/core';
import { HostListener } from '@angular/core';




@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})


export class CarouselComponent implements AfterViewInit {

  itemsPerSlide;
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

  @HostListener('window:resize', ['$event.target'])
  onResize(target) {
    this.width = target.innerWidth;
    console.log(target.innerWidth);

    if (this.width < 992) {
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
  ngAfterViewInit() {
    this.onResize(window);
  }



}












