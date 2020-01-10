using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace catalogo_filmes.Repositories
{
    public interface IRepository<TEntity> where TEntity : class
    {
        IQueryable<TEntity> All { get; }
        Task<TEntity> FindAsync(int key);
        void Add(TEntity obj);
        void Update(TEntity obj);
        void Delete(TEntity obj);
    }
}
