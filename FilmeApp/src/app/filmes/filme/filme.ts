import { Genero } from '../../generos/index';

export interface Filme {
    id: number,
    titulo: string,
    diretor: string,
    genero: Genero,
    sinopse: string,
    ano: number
}