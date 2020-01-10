using catalogo_filmes.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace catalogo_filmes.Repositories
{
    public class GeneroRepository : IRepository<Genero>
    {
        public readonly ApplicationContext _context;

        public GeneroRepository(ApplicationContext context)
        {
            _context = context;
        }

        public IQueryable<Genero> All => _context.Set<Genero>().AsQueryable();

        public void Add(Genero obj)
        {
            _context.Set<Genero>().AddRange(obj);
            _context.SaveChanges();
        }

        public void Delete(Genero obj)
        {
            _context.Set<Genero>().RemoveRange(obj);
            _context.SaveChanges();
        }

        public async Task<Genero> FindAsync(int key)
        {
            return await Task.Run(() => _context.Find<Genero>(key));
        }

        public void Update(Genero obj)
        {
            _context.Set<Genero>().UpdateRange(obj);
            _context.SaveChanges();
        }
    }
}
