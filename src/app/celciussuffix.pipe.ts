import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'celciussuffix' })
export class celciussuffix implements PipeTransform {
  transform(input: number): string {
    //string type
    return input + '\xB0C';
  }
}
