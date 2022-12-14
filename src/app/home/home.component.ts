import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from "../services/restaurants.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public restaurantsService: RestaurantsService) { }

  ngOnInit(): void {
    window.scrollTo(0,0)
  }

}
