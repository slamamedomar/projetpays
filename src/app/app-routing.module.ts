import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ContinentsComponent } from './continents/continents.component';
import { DetailsComponent } from './details/details.component';
import { PaysComponent } from './pays/pays.component';
import {HomeComponent} from "./home/home.component";
import { CountryComponent } from './country/country.component';

const routes: Routes = [{path : '', component: HomeComponent},
                        {path : 'home', component: HomeComponent},
                        {path : 'pays', component: CountryComponent},
                        {path : 'pays/:id',component:PaysComponent},
                        {path : 'pays/details/:id', component:DetailsComponent},
                        {path : 'pays/:name', component: PaysComponent},
                        {path : 'continents', component: ContinentsComponent},


                        ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
