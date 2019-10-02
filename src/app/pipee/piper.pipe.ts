import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'piper'
})
export class PiperPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(value,args);
    return value;
  }
  
}
