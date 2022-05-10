import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'country'
})
export class CountryPipe implements PipeTransform {

  transform(value: any, args : any): any {
    if(!value)return null;
      if(!args)return value;

      args = args.toLowerCase();

      return value.filter(function(data:any){
          return JSON.stringify(data).toLowerCase().includes(args);
      });
  }

}
