﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace catalogo_filmes.Models
{
    public class Genero
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Nome { get; set; }
    }
}
