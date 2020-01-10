using catalogo_filmes.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace catalogo_filmes.Repositories
{
    public class FilmeRepository : IRepository<Filme>
    {
        public readonly ApplicationContext _context;

        public FilmeRepository(ApplicationContext context)
        {
            _context = context;
        }

        public IQueryable<Filme> All => _context.Set<Filme>().AsQueryable();

        public void Add(Filme obj)
        {          
            // Verifica se o Genêro que está sendo inserido já existe no banco.
            if(_context.Generos.Where(ng => ng.Nome == obj.Genero.Nome).Any())
            {
                // Se o Genêro exister, seleciona e atribui ao Genero do Filme que está sendo criado.
                var generoExistente = _context.Generos.Where(ng => ng.Nome == obj.Genero.Nome).FirstOrDefault();
                obj.Genero = generoExistente;

                _context.Set<Filme>().Add(obj);
                _context.SaveChanges();
            }
            else
            {
                // Se o Genêro não existir, inclui ele junto com o novo Filme.
                _context.Set<Filme>().Add(obj);
                _context.SaveChanges();
            }
        }

        public void Delete(Filme obj)
        {
            _context.Set<Filme>().Remove(obj);
            _context.SaveChanges();
        }

        public async Task<Filme> FindAsync(int key)
        {
            return await Task.Run(() => _context.Filmes.Where(k => k.Id == key).Include(g => g.Genero).FirstOrDefault());
        }

        public void Update(Filme obj)
        {
            _context.Set<Filme>().Update(obj);
            _context.SaveChanges();
        }

    }
}
