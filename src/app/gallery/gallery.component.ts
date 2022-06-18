import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { GalleryImage } from '@daelmaak/ngx-gallery';

import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Navigation, Pagination, History } from "swiper";
SwiperCore.use([Navigation, Pagination, History]);


/*
@Component({
  selector: "app-swiper-example",
  template: `<swiper
    [spaceBetween]="50"
    [slidesPerView]="1"
    [navigation]="true"
    [pagination]="true"
    [history]="{
      key: 'slide'
    }"
    class="mySwiper"
  >
    <ng-template data-history="1" swiperSlide>Slide 1</ng-template
    ><ng-template data-history="Slide 2" swiperSlide>Slide 2</ng-template
    ><ng-template data-history="3" swiperSlide>Slide 3</ng-template
    ><ng-template data-history="Slide 4" swiperSlide>Slide 4</ng-template
    ><ng-template data-history="5" swiperSlide>Slide 5</ng-template
    ><ng-template data-history="Slide 6" swiperSlide>Slide 6</ng-template
    ><ng-template data-history="7" swiperSlide>Slide 7</ng-template
    ><ng-template data-history="Slide 8" swiperSlide>Slide 8</ng-template
    ><ng-template data-history="9" swiperSlide>Slide 9</ng-template>
  </swiper>`,
  styleUrls: ["./app.components.scss"],
  encapsulation: ViewEncapsulation.None,
})
*/


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GalleryComponent implements OnInit {

/*
  items = [
    new GalleryImage(
      'https://cdn.pixabay.com/photo/2020/06/23/15/17/avocado-5332878_960_720.jpg',
      'https://cdn.pixabay.com/photo/2020/06/23/15/17/avocado-5332878_960_720.jpg'
    ),
    new GalleryImage(
      'https://cdn.pixabay.com/photo/2017/01/12/02/34/coffee-1973549_960_720.jpg',
      'https://cdn.pixabay.com/photo/2017/01/12/02/34/coffee-1973549_960_720.jpg'
    ),
    new GalleryImage(
      'https://cdn.pixabay.com/photo/2020/06/26/04/40/flower-5341644_960_720.jpg',
      'https://cdn.pixabay.com/photo/2020/06/26/04/40/flower-5341644_960_720.jpg'
    ),
    new GalleryImage(
      'https://cdn.pixabay.com/photo/2016/01/19/17/41/friends-1149841_960_720.jpg',
      'https://cdn.pixabay.com/photo/2016/01/19/17/41/friends-1149841_960_720.jpg'
    ),
    new GalleryImage(
      'https://cdn.pixabay.com/photo/2020/05/11/18/49/island-5159729_960_720.jpg',
      'https://cdn.pixabay.com/photo/2020/05/11/18/49/island-5159729_960_720.jpg'
    ),
    new GalleryImage(
      'https://cdn.pixabay.com/photo/2013/11/15/23/18/john-work-garrett-library-211375_960_720.jpg',
      'https://cdn.pixabay.com/photo/2013/11/15/23/18/john-work-garrett-library-211375_960_720.jpg'
    ),
  ];*/
  constructor() { }

  ngOnInit(): void {
  }

}
