import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imgCollection: Array<object> = [
      {
        image: '../../../assets/images/card1.png',
        thumbImage: '../../../assets/images/card1.png',
        alt: 'Image 1',
        // title: 'Image 1'
      }, {
        image: '../../../assets/images/card2.png',
        thumbImage: '../../../assets/images/card2.png',
        // title: 'Image 2',
        alt: 'Image 2'
      }, {
        image: '../../../assets/images/card1.png',
        thumbImage: '../../../assets/images/card1.png',
        // title: 'Image 3',
        alt: 'Image 3'
      }, {
        image: '../../../assets/images/card2.png',
        thumbImage: '../../../assets/images/card2.png',
        // title: 'Image 4',
        alt: 'Image 4'
      }, {
        image: '../../../assets/images/card1.png',
        thumbImage: '../../../assets/images/card1.png',
        // title: 'Image 5',
        alt: 'Image 5'
      }, {
        image: '../../../assets/images/card2.png',
        thumbImage: '../../../assets/images/card2.png',
        alt: 'Image 6'
      }
  ];

}
