using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace catalogo_filmes.Models
{
    public class Filme
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "O campo Titulo é obrigatório.")]
        public string Titulo { get; set; }
        [Required(ErrorMessage = "O campo Diretor é obrigatório.")]
        public string Diretor { get; set; }
        [Required(ErrorMessage = "O campo Genêro é obrigatório.")]
        public Genero Genero { get; set; }
        public string Sinopse { get; set; }
        public int Ano { get; set; }


    }
}
