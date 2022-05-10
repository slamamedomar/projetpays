import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { COUNTRIES } from 'src/data/countries';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})
export class PaysComponent implements OnInit {

countinentParam! : string ;
dataTable:any = COUNTRIES ;
countriesByContinent:any;
allcountries:any;
countryName : string = "";
public country: any = '';
constructor(private route: ActivatedRoute) { }

ngOnInit(): void {
  this.countinentParam = this.route.snapshot.paramMap.get('id')!;
  this.countriesByContinent = this.dataTable.filter((ct:any)=> {
      return  ct.region == this.countinentParam!;
    });
  if (this.country=='')
  this.allcountries =this.dataTable.filter(()=>{ return 0});

}
}
