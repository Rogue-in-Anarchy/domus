import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  slides = [
    {img: "https://en.elmarkstore.eu/data/uploads/moxesImages/955-daliss5.png"},
    {img: "https://en.elmarkstore.eu/data/uploads/moxesImages/955-colin72-12_crop600x600topcenter.png"},
    {img: "https://en.elmarkstore.eu/data/uploads/moxesImages/955-francis42-14.png"},
    {img: "https://en.elmarkstore.eu/data/uploads/moxesImages/955-duncan9.png"},
    {img: "https://en.elmarkstore.eu/data/uploads/moxesImages/955-catherine17-r.png"},
    {img: "https://en.elmarkstore.eu/data/uploads/moxesImages/955-herald15.png"}
  ];
  slideConfig = {"slidesToShow": 3, "slidesToScroll": 1, "autoplay": true};
  slidersConfig = {"slidesToShow": 2, "slidesToScroll": 1, "autoplay": true};
  sliderConfig = {"slidesToShow": 1, "slidesToScroll": 1, "autoplay": true};

   
  slickInit(e: any) {
    console.log('slick initialized');
  }
  
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  
  afterChange(e: any) {
    console.log('afterChange');
  }
  
  beforeChange(e: any) {
    console.log('beforeChange');
  }
}
