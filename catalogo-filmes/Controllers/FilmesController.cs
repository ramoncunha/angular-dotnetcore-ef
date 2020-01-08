using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using catalogo_filmes;
using catalogo_filmes.Models;
using catalogo_filmes.Repositories;

namespace catalogo_filmes.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class FilmesController : ControllerBase
    {
        /*FORMA NOVA DE UTILIZAR INJEÇÃO DE DEPENDENCIA
        Acrescentar no parâmetro do metodo: [FromServices] ApplicationContext _context*/

        
        // GET: Filmes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Filme>>> GetFilmes([FromServices] IRepository<Filme> _repo)
        {
            var lista = await Task.Run( () => _repo.All.ToList());
            return Ok(lista);
        }

        // GET: Filmes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Filme>> GetFilme(int id, [FromServices] IRepository<Filme> _repo)
        {
            var model = await _repo.FindAsync(id);
            if(model == null)
            {
                return NotFound();
            }

            return Ok(model);
        }

        // PUT: Filmes/5
        [HttpPut]
        public IActionResult Update([FromBody] Filme model, [FromServices] IRepository<Filme> _repo)
        {
            if (ModelState.IsValid)
            {
                _repo.Update(model);
                return Ok();
            }
            return BadRequest();
        }

        // POST: Filmes
        [HttpPost]
        public IActionResult Add([FromBody] Filme model, [FromServices] IRepository<Filme> _repo)
        {
            if (ModelState.IsValid)
            {
                _repo.Add(model);
                return CreatedAtAction("GetFilme", new { id = model.Id }, model);
            }

            return BadRequest();
        }

        // DELETE: Filmes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Filme>> DeleteFilme(int id, [FromServices] IRepository<Filme> _repo)
        {
            var filme = await _repo.FindAsync(id);
            if (filme == null)
            {
                return NotFound();
            }

            _repo.Delete(filme);

            return NoContent();
        }
    }
}
