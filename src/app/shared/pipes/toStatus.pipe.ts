import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';
@Pipe({
    name: 'toStatus'
})
export class toStatusPipe implements PipeTransform {
    public transform(bool: boolean) {
       return bool ? 'Онлайн' : 'Оффлайн';
    }
}
