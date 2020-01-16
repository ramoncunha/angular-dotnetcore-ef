import { Pipe, PipeTransform } from '@angular/core';
import { Filme } from '../filme/index';

@Pipe({
    name: 'filterByTitulo'
})
export class FilterByTitulo implements PipeTransform {
    
    transform(filmes: Filme[], tituloQuery: string) {
        
        if(tituloQuery){
            return filmes.filter(
                filme => filme.titulo.toLowerCase().includes(tituloQuery.toLowerCase())
                );
        } else {
            return filmes;
        }

    }

}