using catalogo_filmes.Models;
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

        public void Add(params Filme[] obj)
        {
            _context.Set<Filme>().AddRange(obj);
            _context.SaveChanges();
        }

        public void Delete(params Filme[] obj)
        {
            _context.Set<Filme>().RemoveRange(obj);
            _context.SaveChanges();
        }

        public async Task<Filme> FindAsync(int key)
        {
            return await Task.Run( () => _context.Find<Filme>(key));
        }

        public void Update(params Filme[] obj)
        {
            _context.Set<Filme>().UpdateRange(obj);
            _context.SaveChanges();
        }

    }
}
