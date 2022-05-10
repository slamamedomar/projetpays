import { Component, OnInit } from '@angular/core';
import { COUNTRIES } from 'src/data/countries';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  countryParam : any;
  dataTable:any = COUNTRIES ;
  pays: string = '';
  countries = COUNTRIES;

  constructor() { }

  ngOnInit(): void {
  }
  search(){

  }

}
