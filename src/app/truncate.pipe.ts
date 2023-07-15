import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string) {
    let str1: string = value;
    let words: Array<string> = str1.split(' ');
    let reversedWords: Array<string> = words.map((word) => {
      let charArray: Array<string> = word.split('');
      charArray.reverse();
      let reversed: string = charArray.join('');
      return reversed;
    });
    let reverseString: string = reversedWords.join(' ');

    return reverseString;
  }
}
