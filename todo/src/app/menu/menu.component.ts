import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BasicAuthenticationService } from '../service/authentication/basic-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() APP_TITLE: any;

  BASE_URL = environment.BASE_URL;

  burger_active: boolean = false;

  constructor(public basicAuthenticationService:BasicAuthenticationService) { }

  ngOnInit(): void {
  }

  toggleBurger() {
    this.burger_active = !this.burger_active;
  }

}
