import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pipeName'
})
export class PipeNamePipe implements PipeTransform {
    transform(value: any): any {
        console.log("value" + value);
       // console.log("value" + args);
        
    }
}