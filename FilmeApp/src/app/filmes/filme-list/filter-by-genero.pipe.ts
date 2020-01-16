import { Pipe, PipeTransform } from '@angular/core';
import { Filme } from '../filme/index';

@Pipe({
    name: 'filterByGenero'
})
export class FilterByGenero implements PipeTransform {
    
    transform(filmes: Filme[], generoQuery: string) {
        
        if(generoQuery){
            return filmes.filter(
                filme => filme.genero.nome.toLowerCase().includes(generoQuery.toLowerCase())
                );
        } else {
            return filmes;
        }

    }

}