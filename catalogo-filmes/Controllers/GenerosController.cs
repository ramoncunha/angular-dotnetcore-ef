using catalogo_filmes.Models;
using catalogo_filmes.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace catalogo_filmes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenerosController : ControllerBase
    {
        // GET: Generos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Genero>>> GetGenero([FromServices] IRepository<Genero> _repo)
        {
            var lista = await Task.Run(() => _repo.All.ToList());
            return Ok(lista);
        }

        // POST: Generos
        [HttpPost]
        public IActionResult Add([FromBody] Genero model, [FromServices] IRepository<Genero> _repo)
        {
            if (ModelState.IsValid)
            {
                _repo.Add(model);
                return CreatedAtAction("GetGenero", new { id = model.Id }, model);
            }

            return BadRequest();
        }

        // DELETE: Generos/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Genero>> DeleteFilme(int id, [FromServices] IRepository<Genero> _repo)
        {
            var genero = await _repo.FindAsync(id);
            if (genero == null)
            {
                return NotFound();
            }

            _repo.Delete(genero);

            return NoContent();
        }
    }
}
