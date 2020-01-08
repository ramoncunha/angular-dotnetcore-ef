using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace catalogo_filmes.Models
{
    public class Filme
    {
        public Filme(string titulo, string diretor, string genero)
        {
            Titulo = titulo;
            Diretor = diretor;
            Genero = genero;
        }
        [Key]
        public int Id { get; set; }
        [Required]
        public string Titulo { get; set; }
        [Required]
        public string Diretor { get; set; }
        [Required]
        public string Genero { get; set; }
        public string Sinopse { get; set; }
        public int Ano { get; set; }


    }
}
