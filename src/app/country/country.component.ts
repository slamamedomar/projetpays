import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { COUNTRIES } from 'src/data/countries';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})

export class CountryComponent implements OnInit {

dataTable:any = COUNTRIES ;
countriesByContinent:any;
allcountries:any;
countryName : string = "";
public country: any = '';
constructor( private route : ActivatedRoute ) { }

ngOnInit(): void {
  this.countriesByContinent = this.dataTable.filter((ct:any)=> {
      return  1;
    });
  if (this.country=='')
  this.allcountries =this.dataTable.filter(()=>{ return 0});

}
}
