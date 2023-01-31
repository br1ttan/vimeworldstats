import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';
@Pipe({
    name : 'WinOrLose'
})
export class WinOrLosePipe implements PipeTransform{
    public transform(bool: boolean) {
       return bool ? 'Перемога' : 'Поразка';
    }
}
