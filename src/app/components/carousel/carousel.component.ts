import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent{
  itemsPerSlide = 5;
  singleSlideOffset = false;
  noWrap = !false;

  slidesChangeMessage = '';

  slides = [
    { image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg' },
    { image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg' },
    { image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg' },
    { image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/4.jpg' },
    { image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/5.jpg' },
    { image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/6.jpg' },
    { image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/7.jpg' },
    { image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/8.jpg' },
    { image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg' },
    { image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg' }
  ];

 
}

/*constructor() { }

ngOnInit() {
}*/


