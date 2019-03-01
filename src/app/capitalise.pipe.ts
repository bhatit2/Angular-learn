import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name : 'capitalise'
})
export class CapitalisePipe implements PipeTransform{
    transform(value : string){
        if(!value){
            return null;
        }
        let words = value.split(" ");
        return words.map((word)=> {
            if(!this.isPreposition(word)){
               word = this.toTitleCase(word);
            }
            return word;
        }).join(" ");
    }

    private isPreposition(word){
        let prepositions = ['of', 'the'];
        return prepositions.includes(word.toLowerCase());
    }

    private toTitleCase(word){
        return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
    }
}