import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { NgOptimizedImage } from '@angular/common';
import { DiscovermorebtnComponent } from '../discovermorebtn/discovermorebtn.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    TestimonialComponent,
    NgOptimizedImage,
    DiscovermorebtnComponent,
  ],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
